<template>
  <section>
    <s-field>
      <s-select placeholder="选择一个名字">
        <option
          v-for="option in data"
          :key="option.id"
          :value="option.id"
        >
          {{ option.user.name }}
        </option>
      </s-select>
    </s-field>

    <s-field label="组">
      <s-select
        placeholder="请选择"
        icon="account"
      >
        <optgroup label="水果">
          <option value="苹果">
            苹果
          </option>
          <option value="香蕉">
            香蕉
          </option>
          <option value="葡萄">
            葡萄
          </option>
        </optgroup>

        <optgroup label="蔬菜">
          <option value="黄瓜">
            黄瓜
          </option>
          <option value="西红柿">
            西红柿
          </option>
          <option value="苦瓜">
            苦瓜
          </option>
          <option value="茄子">
            茄子
          </option>
        </optgroup>
      </s-select>
    </s-field>

    <s-field label="圆形">
      <s-select
        placeholder="请选择"
        rounded
      >
        <option value="圆形">
          圆形
        </option>
        <option value="方形">
          方形
        </option>
      </s-select>
    </s-field>

    <s-field label="载入中">
      <s-select
        placeholder="请选择"
        loading
      >
        <option value="加载中">
          加载中
        </option>
        <option value="载入中">
          载入中
        </option>
      </s-select>
    </s-field>

    <s-field label="禁用">
      <s-select
        placeholder="请选择"
        disabled
      >
        <option value="圆形">
          圆形
        </option>
        <option value="方形">
          方形
        </option>
      </s-select>
    </s-field>

    <s-field
      label="宽度自适应"
    >
      <s-select
        placeholder="请选择"
        expanded
      >
        <option value="圆形">
          圆形
        </option>
        <option value="方形">
          方形
        </option>
      </s-select>
    </s-field>
  </section>
</template>

<script>
const data = require('@/data/sample.json')

export default {
  data () {
    return { data }
  }
}
</script>
