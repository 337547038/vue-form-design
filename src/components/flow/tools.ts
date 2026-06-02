/**
 * 返回节点颜色
 * state 当前节点状态 history已同意处理 active当前 danger拒绝 includes审批路线节点
 */
export const getNodeStroke = (state: string | undefined|unknown, nodeType?: string) => {
    switch (state) {
        case 'history':
            return '#3ba272'
        case 'active':
            return '#fc8452'
        case 'danger':
            return '#f00'
        case 'includes':
            return '#91cc75'
        default:
            const pageType = window.sessionStorage.getItem('pageType')
            if (pageType === 'detail') {
                return '#ccc'
            } else {
                if (nodeType === 'sysTask') {
                    return '#73c0de'
                } else {
                    return '#1b7fff'
                }
            }
    }

}