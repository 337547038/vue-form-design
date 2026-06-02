// 使用自定义节点，将节点的 type 定义为符合项目业务意义的名称。而不是使用圆形、矩形这种仅表示外观的节点
/*默认节点
矩形：rect
圆形: circle
椭圆: ellipse
多边形: polygon
菱形: diamond
文本: text
HTML: html*/
import Start from './start'
import End from './end'
import Task from './task'
import Condition from './condition'
import SubProcess from './subProcess'
import Connection from "./connection"


export default (lf: any) => {
    lf.register(Start)
    lf.register(End)
    lf.register({...Task, type: 'userTask'}) // 用户任务用于节点审批
    lf.register({...Task, type: 'sysTask'}) // 系统任务，用于抄送等不需审批
    lf.register(Condition)
    lf.register(SubProcess)
    lf.register(Connection)
    lf.setDefaultEdgeType('connection') // 设置默认的连线类型为自定义的
}