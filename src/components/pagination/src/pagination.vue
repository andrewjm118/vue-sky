<template>
  <nav
    class="pagination"
    :class="rootClasses"
  >
    <a
      href="#"
      role="button"
      class="pagination-previous"
      :disabled="!hasPrev"
      @click.prevent="prev"
    >
      <s-icon
        :icon="iconPrev"
        :pack="iconPack"
        both
      />
    </a>
    <a
      role="button"
      href="#"
      class="pagination-next"
      :disabled="!hasNext"
      @click.prevent="next"
    >
      <s-icon
        :icon="iconNext"
        :pack="iconPack"
        both
      />
    </a>
    <ul
      v-if="!simple"
      class="pagination-list"
    >
      <!-- First  -->
      <li v-if="hasFirst">
        <a
          href="#"
          role="button"
          class="pagination-link"
          @click.prevent="first"
        >
          1
        </a>
      </li>
      <li v-if="hasFirstEllipsis">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <!-- Pages -->
      <li
        v-for="page in pagesInRange"
        :key="page.number"
      >
        <a
          href="#"
          role="button"
          class="pagination-link"
          :class="{'is-current' : page.isCurrent}"
          @click.prevent="page.click"
        >
          {{ page.number }}
        </a>
      </li>
      <!-- Last -->
      <li v-if="hasLastEllipsis">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li v-if="hasLast">
        <a
          role="button"
          href="#"
          class="pagination-link"
          @click.prevent="last"
        >
          {{ pageCount }}
        </a>
      </li>
    </ul>
    <small
      v-if="simple"
      class="info"
    >
      <template v-if="perPage == 1">
        {{ firstItem }} / {{ total }}
      </template>
      <template v-else>
        {{ firstItem }}-{{ Math.min(current * perPage, total) }} / {{ total }}
      </template>
    </small>
  </nav>
</template>

<script>
import Icon from '../../icon'
import config from '../../../utils/config'
export default {
  name: 'SPagination',
  components: {
    [Icon.name]: Icon
  },
  props: {
    total: [Number, String],
    perPage: {
      type: [Number, String],
      default: 20
    },
    current: {
      type: [Number, String],
      default: 1
    },
    rangeBefore: {
      type: [Number, String],
      default: 1
    },
    rangeAfter: {
      type: [Number, String],
      default: 1
    },
    size: String,
    simple: Boolean,
    rounded: Boolean,
    order: String,
    iconPack: String,
    iconPrev: {
      type: String,
      default: config.defaultIconPrev
    },
    iconNext: {
      type: String,
      default: config.defaultIconNext
    }
  },
  data () {
    return {}
  },
  computed: {
    rootClasses () {
      return [
        this.order,
        this.size,
        {
          'is-simple': this.simple,
          'is-rounded': this.rounded
        }
      ]
    },
    beforeCurrent () {
      return parseInt(this.rangeBefore)
    },

    afterCurrent () {
      return parseInt(this.rangeAfter)
    },
    pageCount () {
      return Math.ceil(this.total / this.perPage)
    },
    firstItem () {
      const firstItem = this.current * this.perPage - this.perPage + 1
      return firstItem >= 0 ? firstItem : 0
    },
    hasPrev () {
      return this.current > 1
    },
    hasFirst () {
      return this.current >= (2 + this.beforeCurrent)
    },
    hasFirstEllipsis () {
      return this.current >= (this.beforeCurrent + 4)
    },
    hasLast () {
      return this.current <= this.pageCount - (1 + this.afterCurrent)
    },
    hasLastEllipsis () {
      return this.current < this.pageCount - (2 + this.afterCurrent)
    },
    hasNext () {
      return this.current < this.pageCount
    },
    pagesInRange () {
      if (this.simple) return

      let left = Math.max(1, this.current - this.beforeCurrent)
      if (left - 1 === 2) {
        left-- // Do not show the ellipsis if there is only one to hide
      }
      let right = Math.min(this.current + this.afterCurrent, this.pageCount)
      if (this.pageCount - right === 2) {
        right++ // Do not show the ellipsis if there is only one to hide
      }

      const pages = []
      for (let i = left; i <= right; i++) {
        pages.push({
          number: i,
          isCurrent: this.current === i,
          click: (event) => {
            if (this.current === i) return
            this.$emit('change', i)
            this.$emit('update:current', i)

            // Set focus on element to keep tab order
            this.$nextTick(() => event.target.focus())
          }
        })
      }
      return pages
    }
  },
  watch: {
    pageCount (value) {
      if (this.current > value) this.last()
    }
  },
  methods: {
    prev () {
      if (!this.hasPrev) return
      this.$emit('change', this.current - 1)
      this.$emit('update:current', this.current - 1)
    },

    /**
        * First button click listener.
        */
    first () {
      this.$emit('change', 1)
      this.$emit('update:current', 1)
    },

    /**
        * Last button click listener.
        */
    last () {
      this.$emit('change', this.pageCount)
      this.$emit('update:current', this.pageCount)
    },

    /**
        * Next button click listener.
        */
    next () {
      if (!this.hasNext) return
      this.$emit('change', this.current + 1)
      this.$emit('update:current', this.current + 1)
    }
  }
}
</script>
