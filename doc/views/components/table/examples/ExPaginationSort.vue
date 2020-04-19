<template>
  <section>
    <s-field
      grouped
      group-multiline
    >
      <s-select v-model="defaultSortDirection">
        <option value="asc">
          Default sort direction: ASC
        </option>
        <option value="desc">
          Default sort direction: DESC
        </option>
      </s-select>
      <s-select
        v-model="perPage"
        :disabled="!isPaginated"
      >
        <option value="5">
          5 per page
        </option>
        <option value="10">
          10 per page
        </option>
        <option value="15">
          15 per page
        </option>
        <option value="20">
          20 per page
        </option>
      </s-select>
      <div class="control">
        <button
          class="button"
          :disabled="!isPaginated"
          @click="currentPage = 2"
        >
          Set page to 2
        </button>
      </div>
      <div class="control is-flex">
        <s-switch v-model="isPaginated">
          Paginated
        </s-switch>
      </div>
      <div class="control is-flex">
        <s-switch
          v-model="isPaginationSimple"
          :disabled="!isPaginated"
        >
          Simple pagination
        </s-switch>
      </div>
      <s-select
        v-model="paginationPosition"
        :disabled="!isPaginated"
      >
        <option value="bottom">
          bottom pagination
        </option>
        <option value="top">
          top pagination
        </option>
        <option value="both">
          both
        </option>
      </s-select>
      <s-select v-model="sortIcon">
        <option value="arrow-up">
          Arrow sort icon
        </option>
        <option value="menu-up">
          Caret sort icon
        </option>
        <option value="chevron-up">
          Chevron sort icon
        </option>
      </s-select>
      <s-select v-model="sortIconSize">
        <option value="is-small">
          Small sort icon
        </option>
        <option value="">
          Regular sort icon
        </option>
        <option value="is-medium">
          Medium sort icon
        </option>
        <option value="is-large">
          Large sort icon
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
          label="First Name"
          sortable
        >
          {{ props.row.user.first_name }}
        </s-table-column>

        <s-table-column
          field="user.last_name"
          label="Last Name"
          sortable
        >
          {{ props.row.user.last_name }}
        </s-table-column>

        <s-table-column
          field="date"
          label="Date"
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
              :icon="props.row.gender === 'Male' ? 'mars' : 'venus'"
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
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 5
    }
  }
}
</script>
