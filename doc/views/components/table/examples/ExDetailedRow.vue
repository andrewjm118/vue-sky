<template>
  <section>
    <s-field
      grouped
      group-multiline
    >
      <div class="control">
        <s-switch v-model="showDetailIcon">
          展示详细图标
        </s-switch>
      </div>
    </s-field>

    <s-table
      ref="table"
      :data="data"
      paginated
      per-page="5"
      :opened-detailed="defaultOpenedDetails"
      detailed
      detail-key="id"
      :show-detail-icon="showDetailIcon"
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
          field="user.first_name"
          label="名字"
          sortable
        >
          <template v-if="showDetailIcon">
            {{ props.row.user.first_name }}
          </template>
          <template v-else>
            <a @click="toggle(props.row)">
              {{ props.row.user.first_name }}
            </a>
          </template>
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
          label="日期"
          sortable
          centered
        >
          <span class="tag is-success">
            {{ new Date(props.row.date).toLocaleDateString() }}
          </span>
        </s-table-column>

        <s-table-column label="Gender">
          <span>
            <s-icon
              pack="fas"
              :icon="props.row.gender === '男' ? 'mars' : 'venus'"
            />
            {{ props.row.gender }}
          </span>
        </s-table-column>
      </template>

      <template
        slot="detail"
        slot-scope="props"
      >
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="/static/img/mao.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ props.row.user.first_name }} {{ props.row.user.last_name }}</strong>
                <small>@{{ props.row.user.first_name }}</small>
                <small>31m</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </div>
          </div>
        </article>
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
      defaultOpenedDetails: [1],
      showDetailIcon: true
    }
  },
  methods: {
    toggle (row) {
      this.$refs.table.toggleDetails(row)
    }
  }
}
</script>
