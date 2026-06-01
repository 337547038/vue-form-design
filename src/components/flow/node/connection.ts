/**
 * 连接线
 */
import {PolylineEdge, PolylineEdgeModel } from "@logicflow/core"
import {getNodeStroke} from '../tools'
import type{NodeStyle} from "../types";

class UserTaskModel extends PolylineEdgeModel  {

    getEdgeStyle(): NodeStyle {
        const style = super.getEdgeStyle();
        style.stroke = getNodeStroke(this.properties.status); // 自定颜色
        return style;
    }
}

export default {
    type: "connection",
    view: PolylineEdge ,
    model: UserTaskModel,
};