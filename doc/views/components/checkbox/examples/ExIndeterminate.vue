<template>
  <div class="field">
    <s-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    >
      全选
    </s-checkbox>
    <s-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
    >
      <s-checkbox
        v-for="animal in animals"
        :key="animal"
        :native-value="animal"
      >
        {{ animal }}
      </s-checkbox>
    </s-checkbox-group>
  </div>
</template>

<script>
const animals = ['猴子', '兔子', '小狗', '小猫']
export default {
  data () {
    return {
      checkAll: false,
      isIndeterminate: true,
      animals: animals,
      checkedCities: ['猴子', '兔子']
    }
  },
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? animals : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.animals.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.animals.length
    }
  }
}
</script>
