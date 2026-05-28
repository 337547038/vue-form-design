<template>
  <div>
    <ak-form :data="{list:[],config:{}}" />
  </div>
</template>

<script setup lang="ts">
  const DataFormatUtils = {
    /**
     * 【序列化】提交数据时调用：把对象中的数组、对象转为 JSON 字符串
     * @param {Object} data - 原始要提交的表单数据
     * @returns {Object} 处理后可直接提交的数据
     */
    serialize(data) {
      if (!data || typeof data !== 'object') {
        return data;
      }

      const result = { ...data }; // 浅拷贝，避免修改原对象

      Object.keys(result).forEach(key => {
        const value = result[key];

        // 过滤 null/undefined，不处理
        if (value === null || value === undefined) {
          return;
        }

        // 如果是数组 / 对象，转为 JSON 字符串
        if (typeof value === 'object') {
          try {
            result[key] = JSON.stringify(value);
          } catch (e) {
            console.warn(`序列化字段 ${key} 失败：`, e);
            result[key] = '';
          }
        }
      });

      return result;
    },

    /**
     * 【反序列化】获取数据时调用：把 JSON 字符串恢复成对象/数组
     * @param {Object} data - 接口返回的数据
     * @returns {Object} 恢复后的数据
     */
    deserialize(data) {
      if (!data || typeof data !== 'object') {
        return data;
      }

      const result = { ...data };

      Object.keys(result).forEach(key => {
        const value = result[key];

        // 只处理字符串类型（可能是 JSON）
        if (typeof value !== 'string') {
          return;
        }

        // 尝试解析 JSON
        try {
          const parsed = JSON.parse(value);
          // 只有解析后是对象/数组才替换，普通字符串不处理
          if (typeof parsed === 'object' && parsed !== null) {
            result[key] = parsed;
          }
        } catch (e) {
          // 不是合法 JSON，保持原值不处理
        }
      });

      return result;
    }
  };
  const my=(fields)=>{
    let temp=[]
    for (const key in fields) {
      if (typeof fields[key] === 'object') {
        temp[key] = JSON.stringify(fields[key])
      } else {
        temp[key] = fields[key]
      }
    }
    return temp
  }
  const you=(formatRes)=>{
    let temp=[]
    for (const key in formatRes) {
      try {
        temp[key] = JSON.parse(formatRes[key])
      } catch (e) {
        temp[key] = formatRes[key]
      }
    }
    return temp
  }
  const formData = {
    name: "测试数据",
    hobby: ["吃饭", "睡觉", "打游戏"], // 数组
    info: { age: 20, address: "北京" }, // 对象
    status: 1
  };
  const data={
    "dateTime": "2026-05-01T00:00:00",
    "upload": "",
    "prepend": "h",
    "inputText": "141411",
    "textarea": "41414",
    "tinymce": "<p>444444</p>",
    "radio": 1,
    "switch": 1,
    "select2": "41414",
    "select1": 1,
    "component": "",
    "table2": "[{\"name\":\"4\",\"sex\":\"\"}]",
    "flex": "[{\"input1706851786349\":\"4\",\"tel\":\"13800138000\"}]",
    "checkbox": "[1]",
    "id": 6,
    "user": "8"
  }
  const submitData = DataFormatUtils.deserialize(DataFormatUtils.serialize(formData));
  console.log(submitData);
  console.log(you(data))


</script>
