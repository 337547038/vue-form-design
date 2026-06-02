
import { CircleNode, CircleNodeModel } from "@logicflow/core"
import {getNodeStroke} from '../tools'
import type {NodeStyle} from "../types.ts";

class UserTaskModel extends CircleNodeModel {
    initNodeData(data:any) {
        super.initNodeData(data);
        this.r = 20 // 自定大小
    }
    getNodeStyle():NodeStyle {
        const style = super.getNodeStyle();
        style.stroke = getNodeStroke(this.properties.status); // 自定颜色
        return style;
    }
}

class UserTaskView extends CircleNode {}

export default {
    type: "start",
    view: UserTaskView,
    model: UserTaskModel,
};