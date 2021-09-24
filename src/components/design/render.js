import {h} from 'vue'
export default {
  name:'render',
  props:{
    html:String
  },
  setup(props){
    return ()=>[
      // h('template',{slot:'prepend'},'<div class="div">div el</div>')
     // h(props.html)
    ]
  }
}
