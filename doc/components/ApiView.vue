<template>
  <section
    id="api-view"
    class="api-view"
  >
    <h2 class="title is-4">
      <router-link to="#api-view">
        #
      </router-link>
      API
    </h2>

    <template v-for="component in data">
      <div :key="component.title">
        <h3
          v-if="component.title"
          class="subtitle"
        >
          {{ component.title }}
        </h3>
        <s-tabs>
          <s-tab-item
            v-if="component.props"
            label="属性"
          >
            <s-table
              :mobile-cards="false"
              :data="component.props"
              :columns="propsColumns"
            />
          </s-tab-item>

          <s-tab-item
            v-if="component.slots"
            label="Slots"
          >
            <s-table
              :mobile-cards="false"
              :data="component.slots"
              :columns="slotsColumns"
            />
          </s-tab-item>

          <s-tab-item
            v-if="component.events"
            label="事件"
          >
            <s-table
              :mobile-cards="false"
              :data="component.events"
              :columns="eventsColumns"
            />
          </s-tab-item>

          <s-tab-item
            v-if="component.methods"
            label="方法"
          >
            <s-table
              :mobile-cards="false"
              :data="component.methods"
              :columns="methodsColumns"
            />
          </s-tab-item>
        </s-tabs>
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
        { label: 'Name', field: 'name', renderHtml: true },
        { label: 'Description', field: 'description', renderHtml: true },
        { label: 'Parameters', field: 'parameters', renderHtml: true }
      ],
      methodsColumns: [
        { label: 'Name', field: 'name', renderHtml: true },
        { label: 'Description', field: 'description', renderHtml: true },
        { label: 'Parameters', field: 'parameters', renderHtml: true },
        { label: 'Return', field: 'return', renderHtml: true }
      ]
    }
  }
}
</script>
