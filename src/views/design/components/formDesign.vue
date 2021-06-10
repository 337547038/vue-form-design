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
        return {}
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
    setValue(obj) {
      if (!obj || Object.keys(obj).length === 0) {
        return
      }
      this.data.list.forEach(item => {
        if (item.type === 'grid') {
          item.columns.forEach(col => {
            col.list.forEach(li => {
              li.control.value = obj[li.name]
            })
          })
        } else if (item.type === 'childTable') {
          item.tableData = obj[item.name]
        } else {
          item.control.value = obj[item.name]
        }
      })
    },
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate()
          .then(res => {
            console.log(res)
            console.log('----====')
            resolve(Object.assign({}, res, this._getTableData())) // 验证通过
            // const vt = this._validateTable()
            /* if (vt.length === 0) {
              resolve(Object.assign({}, res, this._getTableData())) // 验证通过
            } else {
              reject(res, vt)
            } */
          })
          .catch(res => {
            reject(res)
          })
      })
    },
    _validateTable() {
      // console.log(this.$refs.formMainEl.getTable())
      // console.log('validateTable')
      /* const tableItem = this.$refs.formItemEl
      let error = []
      tableItem && tableItem.forEach(item => {
        if (item.validate().length > 0) {
          error.push(item.validate())
        }
      })
      return error */
    },
    _getTableData() {
      let temp = {}
      this.data.list.forEach(item => {
        if (item.type === 'childTable') {
          temp[item.name] = item.tableData
        }
      })
      return temp
    },
    _setRemoteFunc(v) {
      if (this.formType === 1) {
        bus.$emit('setRemoteFunc', v)
      }
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

  }
}
</script>
