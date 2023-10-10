<template>
  <div class="config-option">
    <div class="config-sidebar">
      <el-tree
        :data="dataList"
        :props="defaultProps"
        @node-click="handleNodeClick"
      />
    </div>
    <div class="config-content">
      <list-option />
    </div>
  </div>
</template>
<script setup>
  import { computed, onMounted } from 'vue'
  import ListOption from './components/listOption.md'

  const defaultProps = {
    children: 'children',
    label: 'label'
  }
  const handleNodeClick = data => {
    const filterLabel = data.label.replace(/:\s.*$/, '').replace(/\[|\]/g, '')
    if (filterLabel) {
      const nameId = filterLabel.toLowerCase().trim()
      const heading = document.getElementById(nameId)
      const length = document.querySelectorAll(`.${nameId}`).length
      // 因为转md的原因，存在多个相同id时，始终只返回第一个,会跳转不正确。存在多个时就不跳
      if (heading && length === 1) {
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
  const dataList = computed(() => {
    /*const other = [
      { label: 'get[formName]ControlByName' },
      { label: 'get[formName]ValueByName' }
    ]*/
    return transformData(list)
  })
  const list = {
    columns: [
      {
        label: '多选',
        type: 'selection'
      },
      {
        label: '序号',
        type: 'index',
        width: '70px'
      },
      {
        label: '标题',
        prop: 'title',
        help: ''
      },
      {
        label: '图片',
        prop: 'img',
        help: '',
        config: {
          imgWidth: 80
        }
      },
      {
        prop: 'date',
        label: '时间',
        config: {
          formatter: '{y}-{m}-{d}'
        }
      },
      {
        prop: 'status',
        label: '状态',
        help: '',
        config: {
          dictKey: 'sys-status',
          tagList: {
            1: 'success'
          }
        }
      },
      {
        label: '操作',
        prop: '__control'
      }
    ],
    config: {
      openType: 'dialog',
      dialogWidth: '600',
      fixedBottomScroll: true,
      columnsSetting: true,
      expand: true,
      searchJump: true,
      operateDropdown: true,
      requestUrl: '/get',
      deleteUrl: '/del',
      delKey: 'id',
      imgWidth: 80
    },
    treeData: {
      show: true,
      treeProps: {},
      name: '唯一标识',
      method: 'post',
      requestUrl: '',
      beforeRequest: (data, route) => {
        // data经过处理后返回
        console.log('beforeRequest', data)
        return data
      },
      afterResponse: res => {
        // res返回数据
        console.log('afterResponse', res)
        return res
      }
    },
    tableProps: {},
    controlBtn: [
      {
        label: '新增',
        key: 'add',
        type: 'primary',
        size: 'small',
        icon: 'plus',
        permission: '权限标识',
        click: row => {}
      }
    ],
    operateBtn: [
      {
        label: '编辑',
        key: 'edit',
        visible: '$.status===1',
        permission: '权限标识',
        click: row => {}
      }
    ],
    events: {
      beforeRequest: (data, route) => {
        // data经过处理后返回
        console.log('beforeRequest', data)
        return data
      },
      afterResponse: res => {
        // res返回数据
        console.log('afterResponse', res)
        return res
      },
      beforeDelete: (data, route) => {
        // data经过处理后返回
        console.log('beforeRequest', data)
        return data
      }
    }
  }
  const transformData = (list, temp = []) => {
    for (const key in list) {
      const type = Object.prototype.toString.call(list[key])
      if (type === '[object Object]') {
        //const name = list[key].type || key
        temp.push({
          label: `${key} : {...},`,
          children: transformData(list[key])
        })
      } else if (type === '[object Array]') {
        const child = list[key].length === 1 ? list[key][0] : list[key]
        temp.push({
          label: `${key} : [{...}],`,
          children: transformData(child)
        })
      } else {
        let text = list[key]
        if (typeof text === 'function') {
          text = '...'
        }
        temp.push({ label: `${key} : "${text}",` })
      }
    }
    return temp
  }
  onMounted(() => {
    setTimeout(() => {
      //document.querySelector('.sidebar').style.display = 'none'
      //存在重复id，跳转会异常。转为class
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      headings.forEach(heading => {
        const id = heading.id.split('-')[0]
        if (id) {
          heading.className = id
        }
      })
    }, 500)
  })
</script>

<style lang="scss">
  .config-option {
    height: 100%;
    display: flex;
    background: #fff;
  }

  .config-sidebar {
    width: 250px;
    overflow-y: auto;
  }

  .config-content {
    flex: 2;
    border-left: 1px solid #ddd;
    padding: 0 20px;
    overflow-y: auto;
  }
</style>
