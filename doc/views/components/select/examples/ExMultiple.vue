<template>
  <section>
    <p class="content">
      <b>选择</b>: {{ selectedOptions }}
    </p>
    <s-field>
      <s-select
        v-model="selectedOptions"
        multiple
        native-size="8"
      >
        <option value="香蕉">
          香蕉
        </option>
        <option value="菠萝">
          菠萝
        </option>
        <option value="苹果">
          苹果
        </option>
        <option value="桃">
          桃
        </option>
        <option value="西瓜">
          西瓜
        </option>
        <option value="草莓">
          草莓
        </option>
        <option value="油桃">
          油桃
        </option>
        <option value="荔枝">
          荔枝
        </option>
        <option value="龙眼">
          龙眼
        </option>
        <option value="琵琶">
          琵琶
        </option>
      </s-select>
    </s-field>
  </section>
</template>

<script>
export default {
  data () {
    return {
      selectedOptions: []
    }
  }
}
</script>
