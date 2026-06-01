/*条件*/
import {PolygonNode, PolygonNodeModel, h} from "@logicflow/core";
import {getNodeStroke} from "../tools";
import type {NodeStyle} from "../types";

class UserTaskModel extends PolygonNodeModel {
  initNodeData(data: any) {
    super.initNodeData(data);
    this.points = [
      [25, 0],
      [50, 25],
      [25, 50],
      [0, 25]
    ]
  }

  getNodeStyle(): NodeStyle {
    const style = super.getNodeStyle();
    style.stroke = getNodeStroke(this.properties.status); // 自定颜色
    return style;
  }
}

class UserTaskView extends PolygonNode {
  getShape() {
    const {model} = this.props;
    const {x, y, width, height, points} = model
    const style: NodeStyle = model.getNodeStyle()
    return h(
        'g',
        {
          transform: `matrix(1 0 0 1 ${x - width / 2} ${y - height / 2})`
        },
        h('polygon', {
          ...style,
          x,
          y,
          points
        }),
        h('path', {
          d:
              'm 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z',
          ...style
        })
    )
  }
}

export default {
  type: "condition",
  view: UserTaskView,
  model: UserTaskModel,
};