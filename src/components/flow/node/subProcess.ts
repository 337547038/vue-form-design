import { dynamicGroup } from "@logicflow/extension"
import {getNodeStroke} from "../tools"

class MyGroup extends dynamicGroup.view { }

class MyGroupModel extends dynamicGroup.model {
    getNodeStyle() {
        const style = super.getNodeStyle();
        style.stroke = getNodeStroke(this.properties.status);
        style.strokeDasharray = "3 3";
        style.strokeWidth = 1;
        return style;
    }
}

export default {
    type: "subProcess",
    model: MyGroupModel,
    view: MyGroup
};
