<template>
  <section
    id="api-view"
    class="api-view"
  >
    <template v-for="component in data">
      <div :key="component.title">
        <div v-if="component.props">
          <p
            :id="`props`"
            class="title is-4"
          >
            <router-link
              v-if="component.props"
              :to="`#props`"
            >
              #
            </router-link>
            {{ component.title }} 属性
          </p>

          <s-table
            :mobile-cards="false"
            :data="component.props"
            :columns="propsColumns"
          />
          <hr class="is-medium">
        </div>

        <div v-if="component.slots">
          <p
            :id="`slots`"
            class="title is-4"
          >
            <router-link
              v-if="component.slots"
              :to="`#slots`"
            >
              #
            </router-link>
            {{ component.title }} Slot
          </p>
          <s-table
            :mobile-cards="false"
            :data="component.slots"
            :columns="slotsColumns"
          />
        </div>

        <div v-if="component.events">
          <p
            :id="`events`"
            class="title is-4"
          >
            <router-link
              v-if="component.events"
              :to="`#events`"
            >
              #
            </router-link>
            {{ component.title }} 事件
          </p>
          <s-table
            :mobile-cards="false"
            :data="component.events"
            :columns="eventsColumns"
          />
          <hr class="is-medium">
        </div>

        <div v-if="component.methods">
          <p
            :id="`methods`"
            class="title is-4"
          >
            <router-link
              v-if="component.methods"
              :to="`#methods`"
            >
              #
            </router-link>
            {{ component.title }} 方法
          </p>
          <s-table
            :mobile-cards="false"
            :data="component.methods"
            :columns="methodsColumns"
          />
        </div>
      </div>
    </template>
  </section>
</template>

<script>
export default {
  props: {
    data: Array
  },
  data () {
    return {
      propsColumns: [
        { label: '参数', field: 'name', renderHtml: true },
        { label: '描述', field: 'description', renderHtml: true },
        { label: '类型', field: 'type' },
        { label: '可选值', field: 'values', renderHtml: true },
        { label: '默认值', field: 'default', renderHtml: true }
      ],
      slotsColumns: [
        { label: 'Slot name', field: 'name', renderHtml: true },
        { label: 'Description', field: 'description', renderHtml: true },
        { label: 'Props (if scoped)', field: 'props', renderHtml: true }
      ],
      eventsColumns: [
        { label: '名称', field: 'name', renderHtml: true },
        { label: '描述', field: 'description', renderHtml: true },
        { label: '参数', field: 'parameters', renderHtml: true }
      ],
      methodsColumns: [
        { label: 'Name', field: 'name', renderHtml: true },
        { label: 'Description', field: 'description', renderHtml: true },
        { label: 'Parameters', field: 'parameters', renderHtml: true },
        { label: 'Return', field: 'return', renderHtml: true }
      ]
    }
  },
  computed: {
    slugifiedTitle () {
      if (!this.title) return ''
      return this.title.toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
    }
  }
}
</script>
