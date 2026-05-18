import {jsonParseStringify} from '@/utils/design'
import {getRequest} from '@/api'

interface RouteModel {
  route: Record<string, any> | undefined
  model: Record<string, any>
}

type BeforeHook = (params: any, type?: string | undefined, routeModel?: RouteModel) => any;
type AfterHook = (result: any, isSuccess: boolean, type?: string | undefined) => any;
type MayBeHook = BeforeHook | undefined | null;
type MayBeHookA = AfterHook | undefined | null;

type RequestParams = {
  apiKey: string;
  params?: Record<string, any>;
  route?: Record<string, any> | undefined;
  formModel?: Record<string, any>;
  options?: Record<string, any>;
  before?: BeforeHook | [MayBeHook, MayBeHook] | string;
  after?: AfterHook | [MayBeHookA, MayBeHookA] | string;
  type?: string | undefined;
};

const executeBeforeHook = (
    params: Record<string, any>,
    before: RequestParams['before'],
    type: string | undefined,
    routeModel: RouteModel,
): any => {
  const deepCloneParams = jsonParseStringify(params);
  if (!before) return deepCloneParams;

  if (typeof before === 'function') {
    return before(deepCloneParams, type, routeModel);
  }

  if (Array.isArray(before) && before.length === 2) {
    const [hook1, hook2] = before;
    let propsResult = deepCloneParams
    if (typeof hook1 === 'function') {
      propsResult = hook1(deepCloneParams, type, routeModel);
    }
    if (propsResult === false) return false;
    if (typeof hook2 === 'function') {
      return hook2(jsonParseStringify(propsResult), type, routeModel);
    }
    return propsResult
  }

  console.log('before 钩子返回字符串标识，暂不处理:', before);
  return deepCloneParams;
};
const executeAfterHook = (
    result: any,
    after: RequestParams['after'],
    type: string | undefined,
    isSuccess: boolean,
): any => {
  if (!after) return result;

  if (typeof after === 'function') {
    const afterResult = after(result, isSuccess, type);
    return afterResult ?? result;
  }

  if (Array.isArray(after) && after.length === 2) {
    const [hook1, hook2] = after;
    let result1 = result
    if (typeof hook1 === 'function') {
      result1 = hook1(result, isSuccess, type);
    }
    if (result1 === false) return false;
    if (typeof hook2 === 'function') {
      return hook2(result1, isSuccess, type);
    }
    return result1
  }

  console.log('after 钩子返回字符串标识，暂不处理:', after);
  return result;
};


/**
 * 统一处理before和after提交数据接口请求
 * @param dataParams
 * apiKey 请求url或apiKey；
 * params 请求参数；
 * options 请求其他附加参数；
 * route 路由参数；
 * formModel // 当前表单所有值；
 * before 请求后结果后方法，同时支持props.before和设计数据的config.before；
 * after 请求前方法；
 * type 事件类型
 */
export const beforeAfter = async (dataParams: RequestParams) => {
  const {apiKey, params = {}, route, formModel, options = {}, before, after, type} = dataParams
  if (!apiKey) {
    throw new Error('请求 apiKey 不能为空');
  }

  const routeModel: RouteModel = {
    route,
    model: jsonParseStringify(formModel),
  };

  const beforeResult = executeBeforeHook(params, before, type, routeModel);
  if (beforeResult === false) {
    throw new Error('用户终止操作');
  }

  try {
    const res = await getRequest(apiKey, beforeResult, options);
    const isBlob = res.request?.responseType === 'blob';
    let result = isBlob ? res : res.data;

    result = executeAfterHook(result, after, type, true);
    if (result === false) {
      throw new Error('用户终止操作');
    }

    return {
      data: result ?? res.data,
      message: res.message,
    };
  } catch (error) {
    executeAfterHook(error, after, type, false);
    throw error;
  }
};


/**
 * 返回当前事件，优先返回props的，否则返回里的 todo 移除
 * @param props
 * @param key
 * @return props[key]或props.data.config[key]
 */
export const getRequestEvent = (props: any, key: string) => {
  let event
  const propsEvent = (props as any)[key]
  const events: any = props.data.config
  if (typeof propsEvent === 'function') {
    event = propsEvent
  } else if (events && typeof events[key] === 'function') {
    event = events[key]
  }
  return event
}
