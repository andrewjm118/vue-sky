<template>
  <section>
    <div class="block">
      <button
        class="button"
        @click="activeTab = 1"
      >
        设置音乐
      </button>
    </div>
    <div class="block">
      <s-switch v-model="showBooks">
        显示图书
      </s-switch>
    </div>
    <s-tabs
      v-model="activeTab"
      :animated="false"
    >
      <s-tab-item label="照片">
        我是照片
      </s-tab-item>

      <s-tab-item label="音乐">
        1 <br>
        2 <br>
        3 <br>
        4 <br>
        5.
      </s-tab-item>

      <s-tab-item
        :visible="showBooks"
        label="图书"
      >
        我是图书信息
      </s-tab-item>

      <s-tab-item
        label="视频"
        disabled
      >
        我是视频内容
      </s-tab-item>
    </s-tabs>
  </section>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 0,
      showBooks: false
    }
  }
}
</script>
