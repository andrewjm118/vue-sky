<template>
  <section>
    <s-field
      grouped
      group-multiline
    >
      <button
        class="button field is-danger"
        :disabled="!checkedRows.length"
        @click="checkedRows = []"
      >
        <s-icon icon="close" />
        <span>清空选中项</span>
      </button>
      <s-select v-model="checkboxPosition">
        <option value="left">
          左侧选中框
        </option>
        <option value="right">
          右侧选中框
        </option>
      </s-select>
    </s-field>

    <s-table
      :data="data"
      :columns="columns"
      :checked-rows.sync="checkedRows"
      :is-row-checkable="(row) => row.id !== 3"
      checkable
      :checkbox-position="checkboxPosition"
    >
      <template slot="bottom-left">
        <b>选中总数</b>: {{ checkedRows.length }}
      </template>
    </s-table>
    <pre>{{ checkedRows }}</pre>
  </section>
</template>

<script>
export default {
  data () {
    const data = [
      { id: 1, name: '库里', age: '21', date: '2019-10-15 13:43:27', gender: '男' },
      { id: 2, name: '詹姆斯', age: '22', date: '2019-12-15 06:00:53', gender: '女' },
      { id: 3, name: '科比', age: '33', date: '2019-04-26 06:26:28', gender: '女' },
      { id: 4, name: '帕克', age: '44', date: '2019-04-10 10:28:46', gender: '男' },
      { id: 5, name: '托马斯', age: '265', date: '2019-12-06 14:38:38', gender: '男' }
    ]

    return {
      data,
      checkboxPosition: 'left',
      checkedRows: [data[1], data[3]],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true
        },
        {
          field: 'name',
          label: '姓名'
        },
        {
          field: 'age',
          label: '年龄'
        },
        {
          field: 'date',
          label: '日期',
          centered: true
        },
        {
          field: 'gender',
          label: '性别'
        }
      ]
    }
  }
}
</script>
