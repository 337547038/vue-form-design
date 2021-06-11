<!-- Created by 337547038 on. -->
<template>
  <ak-form
    :rules="rules"
    v-model="model"
    ref="form"
    :class="{[config.className]:true,'add-form':formType===1,'detail-form':formType===2}"
    :trigger="config.trigger"
    :labelWidth="config.labelWidth">
    <formMain
      ref="formMainEl"
      :data="data"
      :formType="formType">
    </formMain>
  </ak-form>
</template>

<script>
import formMain from './formMain'
import bus from '@/utils/bus'

export default {
  name: 'formDesign',
  data() {
    return {
      rules: {},
      model: {}
    }
  },
  components: {formMain},
  props: {
    data: {
      type: Object,
      default: () => {
        return []
      }
    },
    remoteFunc: Object,
    formType: {
      type: Number,
      default: 1 // 0设计模式，1表单提交模式，2详情预浏模式
    }
  },
  watch: {
    remoteFunc: {
      handler: function (v) {
        this._setRemoteFunc(v)
      },
      deep: true
    }
  },
  created() {
    if (this.formType === 1) {
      this._getRulesModel()
    }
  },
  methods: {
    setValue(obj, dataList) {
      if (!dataList) {
        dataList = this.data.list
      }
      if (!obj || Object.keys(obj).length === 0) {
        return
      }
      dataList.forEach(item => {
        if (item.type === 'tabs') {
          item.columns.forEach(col => {
            if (col.list && col.list.length > 0) {
              this.setValue(obj, col.list)
            }
          })
        } else if (item.type === 'grid') {
          item.columns.forEach(col => {
            col.list.forEach(li => {
              if (obj[li.name] !== undefined) {
                li.control.value = obj[li.name]
              }
            })
          })
        } else if (item.type === 'childTable') {
          if (obj[item.name] !== undefined) {
            item.tableData = obj[item.name]
          }
        } else {
          if (obj[item.name] !== undefined) {
            item.control.value = obj[item.name]
          }
        }
      })
      // 修改后提交表格检验时存在问题，这里更新下
      this.$nextTick(() => {
        bus.$emit('setValue')
      })
    },
    _setRemoteFunc(v) {
      const obj = v || this.remoteFunc
      if (this.formType === 1 && Object.keys(obj).length > 0) {
        // bus.$emit('setRemoteFunc', obj)
        this._setRemote(obj, this.data.list)
      }
    },
    _setRemote(obj, dataList) {
      dataList && dataList.forEach(item => {
        if (item.type === 'childTable') {
          item.list.forEach(li => {
            this._setRemoteSet(li, obj)
          })
        } else if (item.type === 'tabs') {
          item.columns.forEach(tab => {
            this._setRemote(obj, tab.list)
          })
        } else {
          this._setRemoteSet(item, obj)
        }
      })
    },
    _setRemoteSet(item, obj) {
      if (item.isFun === 'true' && obj[item.func]) {
        obj[item.func](res => {
          if (item.type === 'select') {
            item.control.options = res
          } else {
            item.control.data = res
          }
        })
      }
    },
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate()
          .then(res => {
            resolve(Object.assign({}, res, this._getTableData(this.data.list, {}))) // 验证通过
          })
          .catch(res => {
            console.log('ok')
            reject(res)
          })
      })
    },
    _getTableData(dataList, temp) {
      dataList && dataList.forEach(item => {
        if (item.type === 'childTable') {
          temp[item.name] = item.tableData
        }
        if (item.type === 'tabs') {
          item.columns.forEach(col => {
            return this._getTableData(col.list, temp)
          })
        }
      })
      return temp
    },
    _getRulesModel() {
      this.$nextTick(() => {
        this._getRules(this.data.list)
        this.$emit('input', this.model)
      })
    },
    _getRules(data) {
      data.forEach(item => {
        if (item.type === 'childTable') {
          // todo
        } else if (item.type === 'grid' || item.type === 'tabs') {
          item.columns.forEach(col => {
            this._getRules(col.list)
          })
        } else {
          let name = item.name
          this.model[name] = item.control.value
          this.rules[name] = item.rules
        }
      })
      this.$emit('input', this.model)
    }
  },
  computed: {
    config() {
      const obj = {
        showMessage: true,
        trigger: 'change'
      }
      if (this.data) {
        return Object.assign({}, obj, this.data.config)
      }
      return obj
    }
  },
  mounted() {
    this._setRemoteFunc()
  }
}
</script>
