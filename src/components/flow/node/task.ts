import {HtmlNode, HtmlNodeModel} from "@logicflow/core";
import {createApp} from 'vue'
import Content from './content.vue'

class UserTaskModel extends HtmlNodeModel {
  app: any;
  isMounted: boolean | undefined

  initNodeData(data: any) {
    super.initNodeData(data)
    this.properties.width = 120
    //this.text.value = data.text?.value || data.type === 'userTask' ? '用户任务' : '系统任务'
    // 显示的名称，统一取text.value;因updateText不会触动setHtml事件更新到content.vue
    // setProperties会更新，因此这里同时写进properties.nodeName
    this.properties.nodeName = this.text.value
  }

  getTextStyle() {
    const style = super.getTextStyle()
    style.visibility = 'hidden' // 隐藏插件自带的显示text
    return style
  }

  /*getNodeStyle() {
      const style = super.getNodeStyle()
      return style
  }*/
  /*constructor(props: any) {
      super(props);

  }*/
}

class UserTaskView extends HtmlNode {
  app: any;
  isMounted: boolean | undefined
  setHtml(nodeEl: any) {
    const properties = this.props.model.getProperties()
    //参与人员将字段名joinName追加到properties里
    const props = {
      nodeName: properties.nodeName,
      userName: properties.joinName,
      status: properties.status,
      nodeType: this.props.model.type // userTask/sysTask两种
    }
    if (!this.isMounted) {
      this.isMounted = true
      const el: HTMLElement = document.createElement('div');
      nodeEl.innerHTML = '';
      nodeEl.appendChild(el);
      // 使用props好像不太理想
      this.app = createApp(Content).mount(el)
      /*this.app = createApp({
          render: () => h(Content, props)
      }).mount(el)*/
    }
    this.app.updateProps(props)
  }
}

export default {
  // type: "task",
  view: UserTaskView,
  model: UserTaskModel,
};