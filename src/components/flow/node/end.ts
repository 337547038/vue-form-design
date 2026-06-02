import {CircleNode, CircleNodeModel, h} from "@logicflow/core";
import {getNodeStroke} from "../tools";
import type {NodeStyle} from "../types";

class UserTaskModel extends CircleNodeModel {
    initNodeData(data: any) {
        super.initNodeData(data);
        this.r = 20 // 自定大小
    }

    getNodeStyle():NodeStyle {
        const style = super.getNodeStyle();
        style.stroke = getNodeStroke(this.properties.status); // 自定颜色
        return style;
    }
}

class UserTaskView extends CircleNode {
    getLabelShape() {
        const {model} = this.props;
        const {x, y, width, height} = model;
        const style = model.getNodeStyle();
        return h(
            "svg",
            {
                x: x - width / 2 + 5,
                y: y - height / 2 + 4,
                width: 30,
                height: 30,
                viewBox: "0 0 1024 1024"
            },
            h("path", {
                fill: style.stroke,
                d:
                    "M835.5 815.5v-607c0-11-9-20-20-20h-607c-11 0-20 9-20 20v607c0 11 9 20 20 20h607c11 0 20-9 20-20z"
            })
        );
    }

    getShape() {
        const {model} = this.props;
        const {x, y, r} = model;
        const style = model.getNodeStyle();
        return h("g", {}, [
            h("circle", {
                ...style,
                cx: x,
                cy: y,
                r: r
            }),
            this.getLabelShape()
        ]);
    }
}

export default {
    type: "end",
    view: UserTaskView,
    model: UserTaskModel,
};