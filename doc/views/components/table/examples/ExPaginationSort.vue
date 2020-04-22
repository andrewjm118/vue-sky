<template>
  <section>
    <s-field
      grouped
      group-multiline
    >
      <s-select v-model="defaultSortDirection">
        <option value="asc">
          排序方式: 升序
        </option>
        <option value="desc">
          排序方式: 降序
        </option>
      </s-select>
      <s-select
        v-model="perPage"
        :disabled="!isPaginated"
      >
        <option value="5">
          每页5条
        </option>
        <option value="10">
          每页10条
        </option>
        <option value="15">
          每页15条
        </option>
        <option value="20">
          每页20条
        </option>
      </s-select>
      <div class="control">
        <button
          class="button"
          :disabled="!isPaginated"
          @click="currentPage = 2"
        >
          查看第二页
        </button>
      </div>
      <div class="control is-flex">
        <s-switch v-model="isPaginated">
          分页
        </s-switch>
      </div>
      <div class="control is-flex">
        <s-switch
          v-model="isPaginationSimple"
          :disabled="!isPaginated"
        >
          简单分页
        </s-switch>
      </div>
      <s-select
        v-model="paginationPosition"
        :disabled="!isPaginated"
      >
        <option value="bottom">
          分页在下面
        </option>
        <option value="top">
          分页在上面
        </option>
        <option value="both">
          两边都有
        </option>
      </s-select>
      <s-select v-model="sortIcon">
        <option value="arrow-up">
          箭头图标样式1
        </option>
        <option value="menu-up">
          箭头图标样式2
        </option>
        <option value="chevron-up">
          箭头图标样式3
        </option>
      </s-select>
      <s-select v-model="sortIconSize">
        <option value="is-small">
          小标题
        </option>
        <option value="">
          正常标题
        </option>
        <option value="is-medium">
          中等标题
        </option>
        <option value="is-large">
          大标题
        </option>
      </s-select>
    </s-field>

    <s-table
      :data="data"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="paginationPosition"
      :default-sort-direction="defaultSortDirection"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"
      default-sort="user.first_name"
    >
      <template slot-scope="props">
        <s-table-column
          field="id"
          label="ID"
          width="40"
          sortable
          numeric
        >
          {{ props.row.id }}
        </s-table-column>

        <s-table-column
          field="user.first_name"
          label="姓名"
          sortable
        >
          {{ props.row.user.first_name }}
        </s-table-column>

        <s-table-column
          field="user.last_name"
          label="内容"
          sortable
        >
          {{ props.row.user.last_name }}
        </s-table-column>

        <s-table-column
          field="date"
          label="时间"
          sortable
          centered
        >
          <span class="tag is-success">
            {{ new Date(props.row.date).toLocaleDateString() }}
          </span>
        </s-table-column>

        <s-table-column label="性别">
          <span>
            <s-icon
              pack="fas"
              :icon="props.row.gender === '男' ? 'mars' : 'venus'"
            />
            {{ props.row.gender }}
          </span>
        </s-table-column>
      </template>
    </s-table>
  </section>
</template>

<script>
const data = require('@/data/sample.json')

export default {
  data () {
    return {
      data,
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'desc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 5
    }
  }
}
</script>
