interface Other {
  route: Record<string, any> | undefined
  model: Record<string, any>
  type?: string | undefined
}

type BeforeHook = (params: Record<string, any>, other?: Other) => any;
type AfterHook = (result: any, isSuccess: boolean, type?: string | undefined) => any;

export type Before = BeforeHook | undefined | null | string;
export type After = AfterHook | undefined | null | string;