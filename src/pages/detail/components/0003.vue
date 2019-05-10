<template>
    <div>
        <div class="header">
            <div class="header-left">
              <router-link to="/">
                <div class="iconfont back-icon">&#xe624;</div>
              </router-link>
            </div>
            <div class="title">健康日志</div>            
        </div>
        <div>
            <a-button class="editable-add-btn" @click="handleAdd">添加</a-button>
            <a-table bordered :dataSource="dataSource" :columns="columns">
                <template slot="name" slot-scope="text, record">
                    <editable-cell :text="text" @change="onCellChange(record.key, '身高', $event)"/>
                </template>
                <template slot="operation" slot-scope="text, record">
                    <a-popconfirm
                      v-if="dataSource.length"
                      title="是否删除"
                      @confirm="() => onDelete(record.key)">
                      <a href="javascript:;">Delete</a>
                    </a-popconfirm>
                </template>
            </a-table>
        </div>
    </div>
</template>

<script>
    import { Table, Button, Popconfirm } from 'ant-design-vue'
    import EditableCell from './EditableCell'
    export default {
      name: 'Third',
      components: {
        EditableCell,
        AButton: Button,
        APopconfirm: Popconfirm
      },
      data () {
        return {
          dataSource: [{
            key: '0',
            name: '180',
            age: '32',
            address: '0%',
          }, {
            key: '1',
            name: '180',
            age: '32',
            address: '0%',
          }],
          count: 2,
          columns: [{
            title: '身高',
            dataIndex: 'name',
            width: '30%',
            scopedSlots: { customRender: 'name' },
          }, {
            title: '体重',
            dataIndex: 'age',
          }, {
            title: '体脂',
            dataIndex: 'address',
          }, {
            title: '操作',
            dataIndex: 'operation',
            scopedSlots: { customRender: 'operation' },
          }],
        }
      },
      methods: {
        onCellChange (key, dataIndex, value) {
            const dataSource = [...this.dataSource]
            const target = dataSource.find(item => item.key === key)
            if (target) {
              target[dataIndex] = value
              this.dataSource = dataSource
            }
        },
        onDelete (key) {
          const dataSource = [...this.dataSource]
          this.dataSource = dataSource.filter(item => item.key !== key)
        },
        handleAdd () {
          const { count, dataSource } = this
          const newData = {
            key: count,
            name: `180`,
            age: 32,
            address: `0%`,
          }
          this.dataSource = [...dataSource, newData]
          this.count = count + 1
        },
      }
    }
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    line-height: .5rem
    background: #00CACA
    color: black
    font-size: .5rem
    padding: .2rem 0
    .header-left
      width: .7rem
      float: left
      .back-icon
        text-align: center
    .title
      margin-left: 2.2rem
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>