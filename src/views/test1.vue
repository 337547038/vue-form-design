<template>
  <div>1</div>
</template>
<script setup lang="ts">
  import {computed, onMounted} from "vue";
  import {objToStringify, stringToObj} from "@/utils/design.ts";
  import {getDataByType} from "@/components/screen/getData.ts";


  const getReplaceText = () => {
    const data = {
      getGlobal: {
        test: [1, 10], text: 'text', xAxis: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00"
        ]
      },
      // getScreenComp: {}
    }
    const newData = '[{name:"{{getGlobal.test}}",type:"{{getGlobal.text}}",num:"{{getGlobal.test[0]}}"}]';
    const newStr = newData.replace(/{{([\w.[\]]+)}}/g, (_: any, keyPath: string) => {
      // 1. 把 [0] 转成 .0，统一路径格式
      const normalizedPath = keyPath.replace(/\[(\d+)\]/g, '.$1');

      // 2. 逐级取值（支持对象、数组、数组下标）
      const value = normalizedPath.split('.').reduce((target, key) => {
        return target?.[key];
      }, data);

      // 3. 关键：如果是数组/对象，转成 JSON 字符串
      return typeof value === 'object' && value !== null
        ? JSON.stringify(value)
        : value;
    });
    //return stringToObj(newStr)
    return JSON.parse(newStr)
  }

  const data = {
    getText: {
      data: [1, 2, 6, 4, 5],
      name: 'name',
      type: [1, 5]
    }
  }
  const option = {
    title:
      {
        text: "{{getText.name}}80%",
        x: "center",
        textStyle:
          {
            fontWeight: "normal",
            color: "#fff",
            fontSize: "18"
          }
      },
    color: "#49bcf7",
    data: '{{getText.data}}',
    data2: "{{getText.data}}",
    name: '{{getText.name}}',
    type: "{{getText.type.0}}"
  }
  onMounted(() => {
    ///console.log(getReplaceText())
    //console.log(replaceTemplateVars(option,getText))
    const result = replaceTemplate(option, data);
    console.log(result);
  })


  function replaceTemplate(option, data) {
    // 1. 先把整个配置转成字符串
    let str = JSON.stringify(option);
    // 处理 纯变量 场景："{{xxx}}" → 直接替换成真实类型（数组/数字/布尔）
    str = str.replace(/"{{([\w\.]+)}}"/g, (match, key) => {
      const val = key.split('.').reduce((o, k) => o?.[k], data);
      return JSON.stringify(val); // 自动保留类型：数组、数字、字符串都正确
    });

    //处理 混合文本 场景：xxx{{xxx}}xxx → 替换成文本
    str = str.replace(/{{([\w\.]+)}}/g, (match, key) => {
      const val = key.split('.').reduce((o, k) => o?.[k], data);
      return val ?? ''; // 纯文本拼接
    });
    return JSON.parse(str);
  }


  const opt = {
    list: [
      {
        type: "text",
        width: "300",
        height: "100",
        x: 281,
        y: 386,
        text: "<p>顺丰<span style=\"color:#0e94eb\">192581</span>30.87%</p> <p>京东<span style=\"color:#c440ef\">215635</span>34.08%</p> <p>EMS<span style=\"color:#efb013\">224585</span>35.49%</p>",
        class: "pie-text",
        id: "text17210430315400"
      },
      {
        type: "text",
        width: "496",
        height: "42",
        x: 25,
        y: "550",
        text: "广东省寄派件数据",
        class: "title1",
        id: "text17210430315401"
      },
      {
        type: "text",
        width: "178",
        height: "26",
        x: 185,
        y: 39,
        zIndex: 2,
        text: "当前到件量",
        class: "left-title1",
        id: "text17210430315402"
      },
      {
        type: "background",
        width: "496",
        height: "186",
        x: "25",
        style:
          {
            border: ""
          },
        class: "left1",
        id: "border17210430315403"
      },
      {
        type: "text",
        width: "496",
        height: 30,
        x: "25",
        y: 100,
        zIndex: 3,
        text: "123,456,789",
        style:
          {
            "text-align": "center",
            fontSize: "28px",
            color: "#fff"
          },
        id: "text17210430315404"
      },
      {
        type: "image",
        width: "19",
        height: "100%",
        x: "28%",
        y: "0",
        src: "./static/demo1/line_img.png",
        id: "image17210430315405"
      },
      {
        type: "clock",
        width: 230,
        height: 30,
        x: 606,
        y: 145,
        zIndex: 2,
        dateTime: "{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}",
        style:
          {
            fontSize: "24px"
          },
        id: "clock17210430315406"
      },
      {
        type: "border",
        width: "370",
        height: 100,
        x: 588,
        y: 127,
        style:
          {
            border: "1px solid #0E94EA"
          },
        id: "border17210430315407"
      },
      {
        type: "echarts",
        width: 439,
        height: 245,
        x: 1435,
        y: 88,
        option:
          {
            title: "",
            grid:
              {
                top: 20,
                containLabel: true,
                bottom: 0
              },
            tooltip:
              {
                show: true
              },
            xAxis: [
              {
                type: "category",
                show: false,
                data: ["入库件", "在库件", "出库件", "退签件", "丢失件"],
                axisLabel:
                  {
                    textStyle:
                      {
                        color: "#fff"
                      }
                  }
              },
              {
                type: "category",
                position: "bottom",
                data: ["入库件", "在库件", "出库件", "退签件", "丢失件"],
                boundaryGap: true,
                axisTick:
                  {
                    show: false
                  },
                axisLine:
                  {
                    show: false
                  },
                axisLabel:
                  {
                    textStyle:
                      {
                        color: "#fff"
                      }
                  }
              },
              {
                show: false,
                data: [1378, 1378, 1378, 1378, 1378, 1378, 1378, 1378, 1378, 1378],
                axisLabel:
                  {
                    inside: true,
                    textStyle:
                      {
                        color: "#fff"
                      }
                  },
                axisTick:
                  {
                    show: false
                  },
                axisLine:
                  {
                    show: false
                  },
                z: 10
              }],
            yAxis: [
              {
                show: true,
                splitLine:
                  {
                    show: false,
                    lineStyle:
                      {
                        color: "#0e94eb"
                      }
                  },
                axisTick:
                  {
                    show: false
                  },
                axisLine:
                  {
                    show: false
                  },
                axisLabel:
                  {
                    show: true,
                    color: "#0e94eb"
                  }
              },
              {
                show: false,
                type: "value",
                nameTextStyle:
                  {
                    color: "#0e94eb"
                  },
                axisLabel:
                  {
                    color: "#0e94eb"
                  },
                splitLine:
                  {
                    show: false
                  },
                axisLine:
                  {
                    show: false
                  },
                axisTick:
                  {
                    show: false
                  }
              },
              {
                axisLine:
                  {
                    show: false
                  },
                axisTick:
                  {
                    show: false
                  },
                axisLabel:
                  {
                    textStyle:
                      {
                        color: "#999"
                      }
                  }
              }],
            series: [
              {
                type: "bar",
                barWidth: 20,
                xAxisIndex: 2,
                tooltip:
                  {
                    show: false
                  },
                itemStyle:
                  {
                    normal:
                      {
                        color: "rgba(14, 148, 235, 0.102)"
                      }
                  },
                data: [1378, 1378, 1378, 1378, 1378, 1378, 1378, 1378, 1378, 1378],
                animation: false
              },
              {
                name: "入库件",
                type: "bar",
                barGap: "-100%",
                barWidth: "40%",
                xAxisIndex: 1,
                itemStyle:
                  {
                    normal:
                      {
                        color: "#0e94eb"
                      },
                    emphasis:
                      {
                        opacity: 1
                      }
                  },
                data: [
                  {
                    name: "入库件",
                    value: 584
                  }, 0, 0, 0, 0]
              },
              {
                name: "滞留件",
                type: "bar",
                stack: "在库件",
                xAxisIndex: 1,
                itemStyle:
                  {
                    normal:
                      {
                        color: "rgba(239,176,19,.9)"
                      },
                    emphasis:
                      {
                        opacity: 1
                      }
                  },
                data: [0,
                  {
                    name: "滞留件",
                    value: 152
                  }, 0, 0, 0]
              },
              {
                name: "丢失件",
                type: "bar",
                xAxisIndex: 1,
                itemStyle:
                  {
                    normal:
                      {
                        color: "rgba(239,176,19,0.4)"
                      },
                    emphasis:
                      {
                        opacity: 1
                      }
                  },
                data: [0, 0, 0, 0,
                  {
                    name: "丢失件",
                    value: 100
                  }]
              },
              {
                name: "正常件",
                type: "bar",
                stack: "在库件",
                xAxisIndex: 1,
                itemStyle:
                  {
                    normal:
                      {
                        color: "rgba(239,176,19,0.3)"
                      },
                    emphasis:
                      {
                        opacity: 1
                      }
                  },
                data: [0,
                  {
                    name: "正常件",
                    value: 689
                  }, 0, 0, 0]
              },
              {
                name: "派送件",
                type: "bar",
                stack: "出库件",
                xAxisIndex: 1,
                itemStyle:
                  {
                    normal:
                      {
                        color: "rgba(196,64,239,0.8)"
                      },
                    emphasis:
                      {
                        opacity: 1
                      }
                  },
                data: [0, 0,
                  {
                    name: "派送件",
                    value: 200
                  }, 0, 0]
              },
              {
                name: "自提件",
                type: "bar",
                stack: "出库件",
                xAxisIndex: 1,
                itemStyle:
                  {
                    normal:
                      {
                        color: "rgba(196,64,239,0.4)"
                      },
                    emphasis:
                      {
                        opacity: 1
                      }
                  },
                data: [0, 0,
                  {
                    name: "自提件",
                    value: 121
                  }, 0, 0]
              },
              {
                name: "退签件",
                type: "bar",
                xAxisIndex: 1,
                itemStyle:
                  {
                    normal:
                      {
                        color: "rgba(219,44,44,0.8)"
                      },
                    emphasis:
                      {
                        opacity: 1
                      }
                  },
                data: [0, 0, 0,
                  {
                    name: "退签件",
                    value: 92
                  }, 0]
              }]
          },
        id: "echarts17210430315408"
      },
      {
        type: "image",
        width: "19",
        height: "100%",
        x: "72%",
        y: "0",
        src: "./static/demo1/line_img.png",
        id: "image17210430315409"
      },
      {
        type: "text",
        width: "496",
        height: "42",
        x: 25,
        y: 238,
        text: "派件入库量占比",
        class: "title1",
        id: "text172104303154010"
      },
      {
        type: "text",
        width: "800",
        height: "53",
        x: "569",
        y: "30",
        text: "智慧物流服务中心",
        class: "title-h1",
        id: "text172104303154011"
      },
      {
        type: "pie",
        width: 253,
        height: 230,
        x: 31,
        y: 322,
        option:
          {
            tooltip:
              {
                trigger: "item",
                confine: true,
                formatter: "{a} <br/>{b}: {c} ({d}%)"
              },
            series: [
              {
                radius: ["50%", "85%"],
                center: ["50%", "50%"],
                type: "pie",
                label:
                  {
                    normal:
                      {
                        show: false
                      },
                    emphasis:
                      {
                        show: false
                      }
                  },
                labelLine:
                  {
                    normal:
                      {
                        show: false
                      },
                    emphasis:
                      {
                        show: false
                      }
                  },
                name: "派件入库量占比内容",
                data: [
                  {
                    name: "顺丰",
                    value: 192581,
                    percent: "30.8721",
                    itemStyle:
                      {
                        normal:
                          {
                            color:
                              {
                                type: "linear",
                                x: 0,
                                y2: 1,
                                colorStops: [
                                  {
                                    offset: 0,
                                    color: "#0e94eb"
                                  },
                                  {
                                    offset: 1,
                                    color: "#0e94eb"
                                  }],
                                globalCoord: false
                              }
                          }
                      }
                  },
                  {
                    name: "京东",
                    value: 215635,
                    percent: "34.076",
                    itemStyle:
                      {
                        normal:
                          {
                            color:
                              {
                                type: "linear",
                                x: 0,
                                y2: 1,
                                colorStops: [
                                  {
                                    offset: 0,
                                    color: "#c440ef"
                                  },
                                  {
                                    offset: 1,
                                    color: "#c440ef"
                                  }],
                                globalCoord: false
                              }
                          }
                      }
                  },
                  {
                    name: "EMS",
                    value: 224585,
                    percent: "35.49",
                    itemStyle:
                      {
                        normal:
                          {
                            color:
                              {
                                type: "linear",
                                x: 0,
                                y2: 1,
                                colorStops: [
                                  {
                                    offset: 0,
                                    color: "#efb013"
                                  },
                                  {
                                    offset: 1,
                                    color: "#efb013"
                                  }],
                                globalCoord: false
                              }
                          }
                      }
                  }]
              },
              {
                radius: ["45%", "50%"],
                center: ["50%", "50%"],
                type: "pie",
                label:
                  {
                    normal:
                      {
                        show: false
                      },
                    emphasis:
                      {
                        show: false
                      }
                  },
                labelLine:
                  {
                    normal:
                      {
                        show: false
                      },
                    emphasis:
                      {
                        show: false
                      }
                  },
                animation: false,
                tooltip:
                  {
                    show: false
                  },
                data: [
                  {
                    name: "顺丰",
                    value: 192581,
                    percent: "30.8721",
                    itemStyle:
                      {
                        normal:
                          {
                            color:
                              {
                                type: "linear",
                                x: 0,
                                y2: 1,
                                colorStops: [
                                  {
                                    offset: 0,
                                    color: "#0077c5"
                                  },
                                  {
                                    offset: 1,
                                    color: "#0077c5"
                                  }],
                                globalCoord: false
                              }
                          }
                      }
                  },
                  {
                    name: "京东",
                    value: 215635,
                    percent: "34.076",
                    itemStyle:
                      {
                        normal:
                          {
                            color:
                              {
                                type: "linear",
                                x: 0,
                                y2: 1,
                                colorStops: [
                                  {
                                    offset: 0,
                                    color: "#a819d7"
                                  },
                                  {
                                    offset: 1,
                                    color: "#a819d7"
                                  }],
                                globalCoord: false
                              }
                          }
                      }
                  },
                  {
                    name: "EMS",
                    value: 224585,
                    percent: "35.49",
                    itemStyle:
                      {
                        normal:
                          {
                            color:
                              {
                                type: "linear",
                                x: 0,
                                y2: 1,
                                colorStops: [
                                  {
                                    offset: 0,
                                    color: "#c99002"
                                  },
                                  {
                                    offset: 1,
                                    color: "#c99002"
                                  }],
                                globalCoord: false
                              }
                          }
                      }
                  }]
              }]
          },
        id: "pie172104303154012"
      },
      {
        type: "component",
        width: "496",
        height: "300",
        x: 22,
        y: 603,
        component: "echartsMap",
        id: "component172104303154013"
      },
      {
        type: "component",
        width: "800",
        height: "600",
        x: 570,
        y: "280",
        component: "echartsMap",
        mapType: "china",
        id: "component172104303154014"
      },
      {
        type: "text",
        width: "496",
        height: "42",
        x: 1405,
        y: 26,
        text: "派件数据",
        class: "title1",
        id: "text172104303154015"
      },
      {
        type: "text",
        width: "496",
        height: "42",
        x: 1406,
        y: "650",
        text: "支出数据",
        class: "title1",
        id: "text172104303154016"
      },
      {
        type: "text",
        width: "496",
        height: "42",
        x: 1404,
        y: "350",
        text: "收入数据",
        class: "title1",
        id: "text172104303154017"
      },
      {
        type: "text",
        width: "490",
        height: "242",
        x: 1408,
        y: "400",
        text: "123,456.5元",
        class: "right-title",
        id: "text172104303154018"
      },
      {
        type: "text",
        width: "490",
        height: "242",
        x: 1410,
        y: "700",
        text: "123,456.5元",
        class: "right-title",
        id: "text172104303154019"
      }],
    config:
      {
        width: "1920px",
        height: "1080px",
        background: "url(./static/demo1/index_bg.png)",
        style: ".left1{background:url('./static/demo1/border_bg01.png') top left no-repeat}\n.left-title1{\n    background:url('./static/demo1/title_bg01.png') top left no-repeat;\n    text-align:center;\n    line-height: 26px;\n    font-size: 18px;\n}\n.title1{\n   background:url('./static/demo1/box_title.png') top left no-repeat; \n   line-height: 42px;\n   color: #fff;\n   font-size: 16px;\n   padding-left: 30px;\n}\n.title-h1{\n    background:url('./static/demo1/title_border.png') top left no-repeat;\n    height:53px;\n    line-height: 53px;\n    color: #cdddf7;\n    font-size: 36px;\n    text-align: center;\n}\n.right-title{\n    background:url('./static/demo1/bg_img03.png') top left no-repeat;\n    font-size: 38px;\n    color: #fff;\n}\n.right-title .text{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.pie-text{\n    color: #ffff;\n    line-height: 30px;\n}\n.pie-text span{\n    padding: 0 10px;\n}",
        primary: "#409eff"
      }
  }
</script>