import{d as i,o as a,c as l}from"./index-DLbVpaQ3.js";const p=i({__name:"test1",setup(n){const t={list:[{type:"text",position:{width:"300",height:"100",left:281,top:386},config:{text:'<p>顺丰<span style="color:#0e94eb">192581</span>30.87%</p> <p>京东<span style="color:#c440ef">215635</span>34.08%</p> <p>EMS<span style="color:#efb013">224585</span>35.49%</p>',class:"pie-text"}},{type:"text",position:{width:"496",height:"42",left:25,top:"550"},config:{text:"广东省寄派件数据",class:"title1"}},{type:"text",position:{width:"178",height:"26",left:185,top:39,zIndex:2},config:{text:"当前到件量",class:"left-title1"}},{type:"border",position:{width:"496",height:"186",left:"25",top:"25"},config:{style:{border:""},class:"left1"}},{type:"text",position:{width:"496",height:30,left:"25",top:100,zIndex:3},config:{text:"123,456,789",style:{"text-align":"center",fontSize:"28px",color:"#fff"}}},{type:"image",position:{width:"19",height:"100%",left:"28%",top:"0"},config:{src:"./static/demo1/line_img.png"}},{type:"clock",position:{width:230,height:30,left:606,top:145,zIndex:2},config:{dateTime:"{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}",style:{fontSize:"24px"}}},{type:"border",position:{width:"370",height:100,left:588,top:127},config:{style:{border:"1px solid #0E94EA"}}},{type:"echarts",position:{width:439,height:245,left:1435,top:88},option:{title:"",grid:{top:20,containLabel:!0,bottom:0,left:0},tooltip:{show:!0},xAxis:[{type:"category",show:!1,data:["入库件","在库件","出库件","退签件","丢失件"],axisLabel:{textStyle:{color:"#fff"}}},{type:"category",position:"bottom",data:["入库件","在库件","出库件","退签件","丢失件"],boundaryGap:!0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{textStyle:{color:"#fff"}}},{show:!1,data:[1378,1378,1378,1378,1378,1378,1378,1378,1378,1378],axisLabel:{inside:!0,textStyle:{color:"#fff"}},axisTick:{show:!1},axisLine:{show:!1},z:10}],yAxis:[{show:!0,splitLine:{show:!1,lineStyle:{color:"#0e94eb"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,color:"#0e94eb"}},{show:!1,type:"value",nameTextStyle:{color:"#0e94eb"},axisLabel:{color:"#0e94eb"},splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#999"}}}],series:[{type:"bar",barWidth:20,xAxisIndex:2,tooltip:{show:!1},itemStyle:{normal:{color:"rgba(14, 148, 235, 0.102)"}},data:[1378,1378,1378,1378,1378,1378,1378,1378,1378,1378],animation:!1},{name:"入库件",type:"bar",barGap:"-100%",barWidth:"40%",xAxisIndex:1,itemStyle:{normal:{color:"#0e94eb"},emphasis:{opacity:1}},data:[{name:"入库件",value:584},0,0,0,0]},{name:"滞留件",type:"bar",stack:"在库件",xAxisIndex:1,itemStyle:{normal:{color:"rgba(239,176,19,.9)"},emphasis:{opacity:1}},data:[0,{name:"滞留件",value:152},0,0,0]},{name:"丢失件",type:"bar",xAxisIndex:1,itemStyle:{normal:{color:"rgba(239,176,19,0.4)"},emphasis:{opacity:1}},data:[0,0,0,0,{name:"丢失件",value:100}]},{name:"正常件",type:"bar",stack:"在库件",xAxisIndex:1,itemStyle:{normal:{color:"rgba(239,176,19,0.3)"},emphasis:{opacity:1}},data:[0,{name:"正常件",value:689},0,0,0]},{name:"派送件",type:"bar",stack:"出库件",xAxisIndex:1,itemStyle:{normal:{color:"rgba(196,64,239,0.8)"},emphasis:{opacity:1}},data:[0,0,{name:"派送件",value:200},0,0]},{name:"自提件",type:"bar",stack:"出库件",xAxisIndex:1,itemStyle:{normal:{color:"rgba(196,64,239,0.4)"},emphasis:{opacity:1}},data:[0,0,{name:"自提件",value:121},0,0]},{name:"退签件",type:"bar",xAxisIndex:1,itemStyle:{normal:{color:"rgba(219,44,44,0.8)"},emphasis:{opacity:1}},data:[0,0,0,{name:"退签件",value:92},0]}]},config:{}},{type:"image",position:{width:"19",height:"100%",left:"72%",top:"0"},config:{src:"./static/demo1/line_img.png"}},{type:"text",position:{width:"496",height:"42",left:25,top:238},config:{text:"派件入库量占比",class:"title1"}},{type:"text",position:{width:"800",height:"53",left:"569",top:"30"},config:{text:"智慧物流服务中心",class:"title-h1"}},{type:"pie",position:{width:253,height:230,left:31,top:322},option:{tooltip:{trigger:"item",confine:!0,formatter:"{a} <br/>{b}: {c} ({d}%)"},series:[{radius:["50%","85%"],center:["50%","50%"],type:"pie",label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1},emphasis:{show:!1}},name:"派件入库量占比内容",data:[{name:"顺丰",value:192581,percent:"30.8721",itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#0e94eb"},{offset:1,color:"#0e94eb"}],globalCoord:!1}}}},{name:"京东",value:215635,percent:"34.076",itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#c440ef"},{offset:1,color:"#c440ef"}],globalCoord:!1}}}},{name:"EMS",value:224585,percent:"35.49",itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#efb013"},{offset:1,color:"#efb013"}],globalCoord:!1}}}}]},{radius:["45%","50%"],center:["50%","50%"],type:"pie",label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1},emphasis:{show:!1}},animation:!1,tooltip:{show:!1},data:[{name:"顺丰",value:192581,percent:"30.8721",itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#0077c5"},{offset:1,color:"#0077c5"}],globalCoord:!1}}}},{name:"京东",value:215635,percent:"34.076",itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#a819d7"},{offset:1,color:"#a819d7"}],globalCoord:!1}}}},{name:"EMS",value:224585,percent:"35.49",itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#c99002"},{offset:1,color:"#c99002"}],globalCoord:!1}}}}]}]},config:{}},{type:"component",position:{width:"496",height:"300",left:22,top:603},config:{component:"echartsMap"}},{type:"component",position:{width:"800",height:"600",left:570,top:"280"},config:{component:"echartsMap",mapType:"china"}},{type:"text",position:{width:"496",height:"42",left:1405,top:26},config:{text:"派件数据",class:"title1"}},{type:"text",position:{width:"496",height:"42",left:1406,top:"650"},config:{text:"支出数据",class:"title1"}},{type:"text",position:{width:"496",height:"42",left:1404,top:"350"},config:{text:"收入数据",class:"title1"}},{type:"text",position:{width:"490",height:"242",left:1408,top:"400"},config:{text:"123,456.5元",class:"right-title"}},{type:"text",position:{width:"490",height:"242",left:1410,top:"700"},config:{text:"123,456.5元",class:"right-title"}}],config:{width:"1920px",height:"1080px",background:"url(./static/demo1/index_bg.png)",style:`.left1{background:url('./static/demo1/border_bg01.png') top left no-repeat}
.left-title1{
    background:url('./static/demo1/title_bg01.png') top left no-repeat;
    text-align:center;
    line-height: 26px;
    font-size: 18px;
}
.title1{
   background:url('./static/demo1/box_title.png') top left no-repeat; 
   line-height: 42px;
   color: #fff;
   font-size: 16px;
   padding-left: 30px;
}
.title-h1{
    background:url('./static/demo1/title_border.png') top left no-repeat;
    height:53px;
    line-height: 53px;
    color: #cdddf7;
    font-size: 36px;
    text-align: center;
}
.right-title{
    background:url('./static/demo1/bg_img03.png') top left no-repeat;
    font-size: 38px;
    color: #fff;
}
.right-title .text{
    display: flex;
    align-items: center;
    justify-content: center;
}
.pie-text{
    color: #ffff;
    line-height: 30px;
}
.pie-text span{
    padding: 0 10px;
}`,primary:"#409eff"}};return t.list.forEach((e,o)=>{e.id=e.type+new Date().getTime().toString()+o}),console.log(t),(e,o)=>(a(),l("div"))}});export{p as default};
