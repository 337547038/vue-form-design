const defaultData = JSON.stringify({
  list: [
    {
      id: 'rect', //这个id不能改
      type: 'tempRect',
      position: {
        width: 200,
        height: 200,
        display: true
      }
    }
  ],
  config: {
    width: '1920px',
    height: '1080px',
    background: '#000',
    style: '',
    primary: '#409eff',
    method: 'get'
  }
})

export default defaultData
