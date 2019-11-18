<template>
  <section>
    <s-field
      grouped
      group-multiline
    >
      <div class="control">
        <s-switch v-model="isBordered">
          边框
        </s-switch>
      </div>
      <div class="control">
        <s-switch v-model="isStriped">
          有条纹
        </s-switch>
      </div>
      <div class="control">
        <s-switch v-model="isNarrowed">
          窄版
        </s-switch>
      </div>
      <div class="control">
        <s-switch v-model="isHoverable">
          鼠标悬停
        </s-switch>
      </div>
      <div class="control">
        <s-switch v-model="isFocusable">
          获得焦点
        </s-switch>
      </div>
      <div class="control">
        <s-switch v-model="isLoading">
          载入
        </s-switch>
      </div>
      <div class="control">
        <s-switch v-model="isEmpty">
          空数据
        </s-switch>
      </div>
    </s-field>

    <s-table
      :data="isEmpty ? [] : data"
      :bordered="isBordered"
      :striped="isStriped"
      :narrowed="isNarrowed"
      :hoverable="isHoverable"
      :loading="isLoading"
      :focusable="isFocusable"
      :mobile-cards="hasMobileCards"
    >
      <template slot-scope="props">
        <s-table-column
          field="id"
          label="ID"
          width="40"
          numeric
        >
          {{ props.row.id }}
        </s-table-column>

        <s-table-column
          field="name"
          label="姓名"
        >
          {{ props.row.name }}
        </s-table-column>

        <s-table-column
          field="age"
          label="年龄"
        >
          {{ props.row.age }}
        </s-table-column>

        <s-table-column
          field="date"
          label="日期"
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
              :icon="props.row.gender === 'Male' ? 'mars' : 'venus'"
            />
            {{ props.row.gender }}
          </span>
        </s-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <s-icon
                icon="emoticon-sad"
                size="is-large"
              />
            </p>
            <p>没有内容.</p>
          </div>
        </section>
      </template>
    </s-table>
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
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true
    }
  }
}
</script>
