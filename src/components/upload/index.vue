<template>
  <div>
    <el-input
      v-if="type === 'input'"
      v-model="modelValue"
      :clearable="true"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      :title="modelValue"
      @clear="clearClick"
    >
      <el-button slot="append" :disabled="disabled" @click="open">{{
        btnText
      }}</el-button>
    </el-input>
    <el-button
      v-else-if="type === 'btn'"
      :disabled="disabled"
      :size="size"
      icon="el-icon-upload"
      type="primary"
      @click="open"
      >{{ btnText }}
    </el-button>
    <div v-if="type === 'img'" class="my-upload-img">
      <img v-if="modelValue" :src="modelValue" @click="open" />
      <i
        v-if="modelValue"
        v-show="!disabled"
        class="el-icon-delete"
        @click.stop="clearClick"
      ></i>
      <i v-else class="el-icon-plus" @click="open"></i>
    </div>
    <el-dialog
      :append-to-body="true"
      :before-close="beforeClose"
      :destroy-on-close="true"
      :title="type === 'btn' ? '上传文件' : '选择文件'"
      v-model:visible="visible"
      class="upload-file"
      width="850px"
    >
      <div class="upload-content">
        <div class="group">
          <div class="group-list">
            <ul>
              <li v-if="isAddGroup" class="add-group">
                <el-input
                  v-model="groupName"
                  placeholder="分组名称"
                  size="mini"
                />
                <el-button size="mini" type="primary" @click="addGroupClick"
                  >提交</el-button
                >
              </li>
              <li
                v-for="item in groupList"
                :key="item.id"
                :class="{ active: groupId === item.id }"
                @click="groupClick(item)"
              >
                <i class="el-icon-folder-opened"></i>
                <span :title="item.name">{{ item.name }}</span>
                <i
                  v-if="!item.hideDel"
                  class="del el-icon-delete"
                  title="删除"
                  @click.stop="delGroup(item.id)"
                ></i>
              </li>
            </ul>
          </div>
          <div class="btn">
            <el-button size="small" @click="addGroup">添加分组</el-button>
          </div>
        </div>
        <my-uploader v-if="isLocal || type === 'btn'" :groupId="groupId" />
        <div v-else class="list-content">
          <div class="control">
            <div class="btn">
              <el-button type="primary" @click="isLocal = true"
                >本地上传</el-button
              >
            </div>
            <div class="search">
              <el-input
                v-model="queryParams.originalFileName"
                class="input-with-select"
                placeholder="请输入名称"
              >
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  @click="getList"
                />
              </el-input>
            </div>
            <div class="grid-type">
              <i
                :class="{ active: typeGrid === 'list' }"
                class="el-icon-s-operation"
                @click="typeGrid = 'list'"
              ></i>
              <i
                :class="{ active: typeGrid === 'grid' }"
                class="el-icon-s-grid"
                @click="typeGrid = 'grid'"
              ></i>
            </div>
          </div>
          <div v-if="typeGrid === 'list'" class="list-table">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column label="文件名">
                <template v-slot="scope">
                  <el-radio v-model="checked" :label="scope.row.fileUrl">{{
                    scope.row.originalFileName
                  }}</el-radio>
                </template>
              </el-table-column>
              <el-table-column label="上传时间" prop="createTime" width="150" />
            </el-table>
          </div>
          <div v-if="typeGrid === 'grid'" class="list-grid">
            <p v-if="tableData.length === 0" class="empty">
              <i class="el-icon-picture-outline"></i>暂无数据
            </p>
            <ul>
              <li
                v-for="item in tableData"
                :key="item.id"
                :class="{ active: checked === item.fileUrl }"
                @click="gridCheckClick(item)"
              >
                <img v-if="getFileImg(item) === 'img'" :src="item.fileUrl" />
                <i
                  v-else-if="getFileImg(item) === 'video'"
                  class="el-icon-video-play play"
                  title="视频预览"
                  @click.stop="videoPreview(item)"
                ></i>
                <i v-else class="other">无预览</i>
                <span :title="item.originalFileName">{{
                  item.originalFileName
                }}</span>
              </li>
            </ul>
          </div>
          <div class="page">
            <pagination
              v-show="total > 0"
              v-model:limit="queryParams.pageSize"
              v-model:page="queryParams.pageNum"
              :total="total"
              :pager-count="5"
              @pagination="getList"
            />
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button v-if="isLocal" type="primary" @click="backListClick"
          >返回列表</el-button
        >
        <template v-else>
          <el-button @click="cancelClick">取 消</el-button>
          <el-button type="primary" @click="confirmClick">确 定</el-button>
        </template>
      </div>
    </el-dialog>
    <el-dialog
      :append-to-body="true"
      :modal="false"
      v-model:visible="video.visible"
      class="video-preview"
    >
      <video ref="videoEl" autoplay controls height="240" width="320">
        <source :src="video.src" type="video/mp4" />
      </video>
    </el-dialog>
  </div>
</template>

<script>
  import { list, fileGroup, fileGroupAll, fileGroupDel } from '@/api/sys/file'
  import MyUploader from './uploader.vue'

  export default {
    name: 'myUpload',
    data() {
      return {
        video: {
          visible: false,
          src: ''
        },
        visible: false,
        keyword: '',
        tableData: [],
        total: 0,
        queryParams: {
          pageNum: 1,
          pageSize: 20
        },
        checked: '',
        modelValue: this.value,
        groupId: '',
        groupList: [],
        isAddGroup: false,
        groupName: '',
        isLocal: false,
        typeGrid: 'list'
      }
    },
    components: { MyUploader },
    props: {
      value: String | Number,
      disabled: Boolean,
      placeholder: String,
      readonly: {
        type: Boolean,
        default: true
      },
      btnText: {
        type: String,
        default: '选择文件'
      },
      type: {
        type: String,
        default: 'input' // input显示输入和按钮，img图片上传,btn按钮此时仅可上传不能选择
      },
      size: String // 按钮大小
    },
    watch: {
      value(val) {
        this.modelValue = val
      }
    },
    methods: {
      backListClick() {
        this.isLocal = false
        this.getList()
      },
      // 视频预览
      videoPreview(obj) {
        this.video.visible = true
        this.video.src = obj.fileUrl
        this.$refs.videoEl.src = obj.fileUrl
        // 加载新的视频
        this.$refs.videoEl.load()
      },
      gridCheckClick(obj) {
        this.checked = obj.fileUrl
      },
      getFileImg(obj) {
        if (['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(obj.fileSuffix)) {
          return 'img'
        } else if (
          ['mp4', 'mp3', 'mov', 'flv', 'webm'].includes(obj.fileSuffix)
        ) {
          return 'video'
        } else {
          return ''
        }
      },
      // 组列表
      getGroupList() {
        fileGroupAll({}).then(res => {
          // console.log(res)
          this.groupList = res.data || []
          this.groupList.unshift({ id: '', name: '全部', hideDel: true })
          // 默认选中第一条
          /*if (res.data && res.data.length) {
            this.groupId = res.data[0].id
          }*/
        })
      },
      addGroup() {
        this.isAddGroup = !this.isAddGroup
        this.groupName = ''
      },
      // 添加组
      addGroupClick() {
        if (!this.groupName) {
          return this.msgError('请输入分组名称')
        }
        fileGroup({ name: this.groupName })
          .then(response => {
            if (response.code === 0) {
              this.msgSuccess('添加分组成功')
            } else {
              this.msgError(response.msg)
            }
            this.isAddGroup = false
            this.getGroupList()
          })
          .catch(() => {})
      },
      groupClick(obj) {
        this.groupId = obj.id
        if (this.type !== 'btn') {
          // 根据当前选中组加载数据
          this.getList()
        }
      },
      delGroup(id) {
        fileGroupDel(id).then(response => {
          if (response.code === 0) {
            this.msgSuccess('删除成功')
          } else {
            this.msgError(response.msg)
          }
          this.getGroupList()
        })
      },
      clearClick() {
        this.modelValue = ''
        this.$emit('input', '')
      },
      open() {
        if (this.disabled) {
          return
        }
        this.visible = true
        // 设置默认值
        this.checked = this.value
        // 作一个缓存判断，没有数据时才加载
        if (this.tableData && this.tableData.length === 0) {
          this.getList()
        }
        if (this.groupList && this.groupList.length === 0) {
          this.getGroupList()
        }
      },
      beforeClose() {
        this.cancelClick()
      },
      getList() {
        const fileGroupId = { fileGroupId: this.groupId } // 这个是默认分组todo
        list(Object.assign(this.queryParams, fileGroupId)).then(response => {
          this.tableData = response.data.rows
          this.total = response.data.total
        })
      },
      confirmClick() {
        this.modelValue = this.checked
        this.$emit('input', this.checked)
        this.$emit('change')
        this.cancelClick()
      },
      cancelClick() {
        // 关闭弹窗，恢复默认
        this.visible = false
        this.isLocal = false
        this.isAddGroup = false
      }
    },
    mounted() {}
  }
</script>

<style lang="scss">
  .upload-file {
    .el-dialog__body {
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      padding: 0;
    }

    .upload-content {
      display: flex;

      .group {
        width: 200px;
        border-right: 1px solid #eee;
        padding: 15px 0;
        display: flex;
        flex-direction: column;
        flex-basis: 200px;

        .add-group {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;

          button {
            margin-left: 5px;
          }
        }

        .group-list {
          display: block;
          flex: 2;
          overflow-y: auto;
          margin-bottom: 10px;
          max-height: 980px;
          min-height: 250px;
        }

        li {
          height: 30px;
          padding: 0 20px;
          align-items: center;
          cursor: pointer;
          display: flex;
          justify-content: space-between;

          span {
            flex: 2;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          &:hover {
            .del {
              display: block;
            }
          }
        }

        .active {
          background: #edefff;
        }

        i {
          font-size: 18px;
          margin-right: 5px;
          color: #ffe995;
        }

        .btn {
          display: flex;
          justify-content: center;
        }

        .del {
          color: #333;
          font-size: 14px;
          transform: translateX(20px);
          display: none;
        }

        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
          position: relative;
          z-index: 100;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #babdc2;
          background-clip: padding-box;
          min-height: 28px;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-corner {
          background: #babdc2;
        }
      }

      .list-content {
        flex: 2;
        padding: 15px 20px;
      }

      .control {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .search {
          flex: 2;
          margin-left: 50px;
        }

        .grid-type {
          display: flex;
          margin-left: 10px;
          font-size: 22px;

          i {
            margin-left: 8px;
            cursor: pointer;
          }

          .active {
            color: #00afff;
          }
        }
      }

      .list-table {
        padding: 10px 0;
      }

      .list-grid {
        padding-top: 10px;

        ul {
          display: flex;
          flex-wrap: wrap;
        }

        li {
          width: 90px;
          height: 90px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ddd;
          margin: 0 5px 10px;
          position: relative;
          cursor: pointer;
          border-radius: 3px;

          img {
            display: block;
            width: 100%;
          }

          span {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: block;
            padding: 5px;
            color: #fff;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            transition: all 0.5s;
          }

          &.active {
            border-color: red;
          }
        }

        .play {
          font-size: 32px;
          color: #ddd;
          transform: translateY(-15px);
        }

        .other {
          color: #ddd;
        }

        .empty {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: center;

          i {
            display: block;
            font-size: 46px;
            color: #ddd;
            margin-bottom: 10px;
          }
        }
      }
    }

    .video-uploader-dialog {
      margin: 20px 0;
      flex: 2;

      .uploader-drop {
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .my-upload-img {
    position: relative;
    display: inline-block;

    img {
      display: block;
      width: 150px;
      cursor: pointer;
      height: 150px;
      border-radius: 5px;
      overflow: hidden;
    }

    .el-icon-plus {
      width: 150px;
      display: flex;
      height: 150px;
      border: 1px dashed #d9d9d9;
      font-size: 28px;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      cursor: pointer;
    }

    .el-icon-delete {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: none;
      font-size: 26px;
      cursor: pointer;
    }

    &:hover {
      .el-icon-delete {
        display: block;
      }
    }
  }

  .video-preview {
    top: auto !important;
    left: auto;
    width: 320px;
    height: 240px;
    overflow: hidden;

    .el-dialog {
      margin: 0 !important;
      width: 100%;
    }

    .el-dialog__body {
      padding: 0;
      display: flex;
      align-items: center;
      background: #000;
    }

    .el-dialog__header {
      position: absolute;
      right: 0;
      top: 0;
    }

    .el-dialog__headerbtn {
      top: 3px;
      right: 8px;
      font-size: 22px;
      color: #fff;
      cursor: pointer;
      z-index: 10;
    }
  }
</style>
