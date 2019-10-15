<template>
  <div
    class="s-table"
    :class="{'is-loading' : loading}"
  >
    <div
      v-if="paginated && (paginationPosition === 'top' || paginationPosition === 'both')"
      class="top level"
    >
      <div class="level-left">
        <slot name="top-left" />
      </div>
      <div class="level-right">
        <div
          v-if="pagtinated"
          class="level-item"
        >
          <s-pagination
            :icon-pack="iconPack"
            :total="newDataTotal"
            :per-page="perPage"
            :simple="paginationSimple"
            :size="paginationSize"
            :current="newCurrentPage"
            @change="pageChanged"
          />
        </div>
      </div>
    </div>
    <div class="table-wrapper">
      <table
        class="table"
        :class="tableClasses"
      >
        <thead v-if="newColumns.length">
          <tr>
            <th
              v-if="showDetailRowIcon"
              width="40px"
            />
            <th
              v-if="checkable && checkboxPosition === 'left'"
              class="checkbox-cell"
            >
              <template v-if="headerCheckable">
                <s-checkbox
                  :value="isAllChecked"
                  :disabled="isAllUncheckable"
                  @change.native="checkAll"
                />
              </template>
            </th>
            <th
              v-for="(column, index) in visibleColumns"
              :key="index"
              :class="{'is-current-sort': currentSortColumn === column,
                       'is-sortable': column.sortable}"
              :style="{
                width : column.width === undefined ? null : column.width + 'px'
              }"
            >
              <div
                class="th-wrap"
                :class="{
                  'is-numeric': column.numeric,
                  'is-centered': column.centered
                }"
              >
                <template>{{ column.label }}</template>

                <s-icon
                  v-show="currentSortColumn === column"
                  :icon="sortIcon"
                  :pack="iconPack"
                  both
                  :size="sortIconSize"
                  :class="{ 'is-desc': !isAsc }"
                />
              </div>
            </th>
            <th
              v-if="checkable && checkboxPosition === 'right'"
              class="checkbox-cell"
            >
              <template v-if="headerCheckable">
                <s-checkbox
                  :value="isAllChecked"
                  :disabled="isAllUncheckable"
                  @change.native="checkAll"
                />
              </template>
            </th>
          </tr>
        </thead>
        <tbody v-if="visibleData.length">
          <template v-for="(row, index) in visibleData">
            <tr
              :key="customRowKey ? row[customRowKey] : index"
              :class="[rowClass(row,index), {
                'is-selected': row === selected,
                'is-checked': isRowChecked(row),
              }]"
              @click="selectRow(row)"
              @dblclick="$emit('dblclick', row)"
              @mouseenter="$emit('mouseenter', row)"
              @mouseleave="$emit('mouseleave', row)"
              @contextmenu="$emit('contextmenu', row, $event)"
            >
              <td
                v-if="showDetailRowIcon"
                class="chevron-cell"
              >
                <a
                  v-if="hasDetailedVisible(row)"
                  role="button"
                  @click.stop="toggleDetails(row)"
                >
                  <s-icon
                    icon="chevron-right"
                    :pack="iconPack"
                    both
                    :class="{'is-expanded': isVisibleDetailRow(row)}"
                  />
                </a>
              </td>

              <td
                v-if="checkable && checkboxPosition === 'left'"
                class="checkbox-cell"
              >
                <s-checkbox
                  :disabled="!isRowCheckable(row)"
                  :value="isRowChecked(row)"
                  @change.native="checkRow(row)"
                  @click.native.stop
                />
              </td>

              <slot
                v-if="$scopedSlots.default"
                :row="row"
                :index="index"
              />
              <template v-else>
                <STableColumn
                  v-for="column in newColumns"
                  :key="column.field"
                  v-bind="column"
                  internal
                >
                  <span
                    v-if="column.renderHtml"
                    v-html="getValueByPath(row, column.field)"
                  />
                  <template v-else>
                    {{ getValueByPath(row, column.field) }}
                  </template>
                </STableColumn>
              </template>
              <td
                v-if="checkable && checkboxPosition === 'right'"
                class="checkbox-cell"
              >
                <s-checkbox
                  :disabled="!isRowCheckable(row)"
                  :value="isRowChecked(row)"
                  @change.native="checkRow(row)"
                  @click.native.stop
                />
              </td>
            </tr>

            <tr
              v-if="isActiveDetailRow(row)"
              :key="index"
              class="detail"
            >
              <td :colspan="columnCount">
                <div class="detail-container">
                  <slot
                    name="detail"
                    :row="row"
                    :index="index"
                  />
                </div>
              </td>
            </tr>
            <slot
              v-if="isActiveCustomDetailRow(row)"
              name="detail"
              :row="row"
              :index="index"
            />
          </template>
        </tbody>
        <tbody v-else>
          <tr class="is-empty">
            <td :colspan="columnCount">
              <slot name="empty" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      v-if="(checkable && hasBottomLeftSlot()) ||
        (paginated && (paginationPosition === 'bottom' || paginationPosition === 'both'))"
      class="level"
    >
      <div class="level-left">
        <slot name="bottom-left" />
      </div>
      <div class="level-right">
        <div
          v-if="paginated"
          class="level-item"
        >
          <s-pagination
            :icon-pack="iconPack"
            :total="newDataTotal"
            :per-page="perPage"
            :simple="paginationSimple"
            :size="paginationSize"
            :current="newCurrentPage"
            @change="pageChanged"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getValueByPath, indexOf } from '../../../utils/helpers'
import Checkbox from '../../checkbox'
import Icon from '../../icon'
import Pagination from '../../pagination'
import TableColumn from './table-column'

export default {
  name: 'STable',
  components: {
    [Checkbox.name]: Checkbox,
    [Icon.name]: Icon,
    [Pagination.name]: Pagination,
    [TableColumn.name]: TableColumn
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    bordered: Boolean,
    striped: Boolean,
    narrowed: Boolean,
    hoverable: Boolean,
    loading: Boolean,
    detailed: Boolean,
    checkable: Boolean,
    headerCheckable: {
      type: Boolean,
      default: true
    },
    checkboxPosition: {
      type: String,
      default: 'left',
      validator: (value) => {
        return [
          'left',
          'right'
        ].indexOf(value) >= 0
      }
    },
    selected: Object,
    focusable: Boolean,
    customIsChecked: Function,
    isRowCheckable: {
      type: Function,
      default: () => true
    },
    checkedRows: {
      type: Array,
      default: () => []
    },
    mobileCards: {
      type: Boolean,
      default: true
    },
    defaultSort: [String, Array],
    defaultSortDirection: {
      type: String,
      default: 'asc'
    },
    sortIcon: {
      type: String,
      default: 'arrow-up'
    },
    sortIconSize: {
      type: String,
      default: 'is-small'
    },
    paginated: Boolean,
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: [Number, String],
      default: 20
    },
    showDetailIcon: {
      type: Boolean,
      default: true
    },
    paginationSimple: Boolean,
    paginationSize: String,
    paginationPosition: {
      type: String,
      default: 'bottom',
      validator: (value) => {
        return [
          'bottom',
          'top',
          'both'
        ].indexOf(value) >= 0
      }
    },
    backendSorting: Boolean,
    rowClass: {
      type: Function,
      default: () => ''
    },
    openedDetailed: {
      type: Array,
      default: () => []
    },
    hasDetailedVisible: {
      type: Function,
      default: () => true
    },
    detailKey: {
      type: String,
      default: ''
    },
    customDetailRow: {
      type: Boolean,
      default: false
    },
    backendPagination: Boolean,
    total: {
      type: [Number, String],
      default: 0
    },
    iconPack: String,
    customRowKey: String
  },
  data () {
    return {
      getValueByPath,
      newColumns: [...this.columns],
      visibleDetailRows: this.openedDetailed,
      newData: this.data,
      newDataTotal: this.backendPagination ? this.total : this.data.length,
      newCheckedRows: [...this.checkedRows],
      newCurrentPage: this.currentPage,
      currentSortColumn: {},
      isAsc: true,
      firstTimeSort: true, // Used by first time initSort
      _isTable: true // Used by TableColumn
    }
  },
  computed: {
    showDetailRowIcon () {
      return this.detailed && this.showDetailIcon
    },

    tableClasses () {
      return {
        'is-bordered': this.bordered,
        'is-striped': this.striped,
        'is-narrow': this.narrowed,
        'is-hoverable': (
          (this.hoverable || this.focusable) &&
                    this.visibleData.length
        )
      }
    },
    columnCount () {
      let count = this.newColumns.length
      count += this.checkable ? 1 : 0
      count += this.detailed ? 1 : 0
      return count
    },

    visibleColumns () {
      if (!this.newColumns) return this.newColumns
      return this.newColumns.filter((column) => {
        return column.visible || column.visible === undefined
      })
    },

    visibleData () {
      if (!this.paginated) return this.newData

      const currentPage = this.newCurrentPage
      const perPage = this.perPage

      if (this.newData.length <= perPage) {
        return this.newData
      } else {
        const start = (currentPage - 1) * perPage
        const end = parseInt(start, 10) + parseInt(perPage, 10)
        return this.newData.slice(start, end)
      }
    },

    hasSortablenewColumns () {
      return this.newColumns.some((column) => {
        return column.sortable
      })
    },
    isAllChecked () {
      const validVisibleData = this.visibleData.filter(
        (row) => this.isRowCheckable(row))
      if (validVisibleData.length === 0) return false
      const isAllChecked = validVisibleData.some((currentVisibleRow) => {
        return indexOf(this.newCheckedRows, currentVisibleRow, this.customIsChecked) < 0
      })
      return !isAllChecked
    },
    isAllUncheckable () {
      const validVisibleData = this.visibleData.filter(
        (row) => this.isRowCheckable(row))
      return validVisibleData.length === 0
    }

  },
  watch: {
    data (value) {
      // Save newColumns before resetting
      const newColumns = this.newColumns

      this.newColumns = []
      this.newData = value

      // Prevent table from being headless, data could change and created hook
      // on column might not trigger
      this.$nextTick(() => {
        if (!this.newColumns.length) this.newColumns = newColumns
      })

      if (!this.backendSorting) {
        this.sort(this.currentSortColumn, true)
      }
      if (!this.backendPagination) {
        this.newDataTotal = value.length
      }
    },
    checkedRows (rows) {
      this.newCheckedRows = [...rows]
    }
  },
  created () {},
  mounted () {},
  methods: {
    selectRow (row, index) {
      this.$emit('click', row)

      if (this.selected === row) return

      // Emit new and old row
      this.$emit('select', row, this.selected)

      // Emit new row to update user variable
      this.$emit('update:selected', row)
    },
    isRowChecked (row) {
      return indexOf(this.newCheckedRows, row, this.customIsChecked) >= 0
    },
    removeCheckedRow (row) {
      const index = indexOf(this.newCheckedRows, row, this.customIsChecked)
      if (index >= 0) {
        this.newCheckedRows.splice(index, 1)
      }
    },
    isActiveDetailRow (row) {
      return this.detailed && !this.customDetailRow && this.isVisibleDetailRow(row)
    },
    isActiveCustomDetailRow (row) {
      return this.detailed && this.customDetailRow && this.isVisibleDetailRow(row)
    },
    hasBottomLeftSlot () {
      return typeof this.$slots['bottom-left'] !== 'undefined'
    },
    checkRow (row) {
      if (!this.isRowChecked(row)) {
        this.newCheckedRows.push(row)
      } else {
        this.removeCheckedRow(row)
      }

      this.$emit('check', this.newCheckedRows, row)

      // Emit checked rows to update user variable
      this.$emit('update:checkedRows', this.newCheckedRows)
    },
    checkAll () {
      const isAllChecked = this.isAllChecked
      this.visibleData.forEach((currentRow) => {
        this.removeCheckedRow(currentRow)
        if (!isAllChecked) {
          if (this.isRowCheckable(currentRow)) {
            this.newCheckedRows.push(currentRow)
          }
        }
      })

      this.$emit('check', this.newCheckedRows)
      this.$emit('check-all', this.newCheckedRows)

      // Emit checked rows to update user variable
      this.$emit('update:checkedRows', this.newCheckedRows)
    }
  }
}
</script>
