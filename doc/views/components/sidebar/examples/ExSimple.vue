<template>
  <section>
    <s-sidebar
      :is-show="isShow"
      title="Left sidebar!"
      @close="isShow=false"
    >
      <h3>Dolor sit amet</h3>
      <p>
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
        fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      </p>
      <h3>Dolor sit amet</h3>
      <p>
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
        fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      </p>
    </s-sidebar>
    <s-button @click="toggle">
      左侧弹出框
    </s-button>
    <s-sidebar
      :is-show="isRightShow"
      title="right sidebar!"
      placement="right"
      @close="isRightShow=false"
    >
      <h3>Dolor sit amet</h3>
      <p>
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
        fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      </p>
      <h3>Dolor sit amet</h3>
      <p>
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
        fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      </p>
    </s-sidebar>
    <s-button @click="rightToggle">
      右侧弹出框
    </s-button>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      isRightShow: false
    }
  },
  methods: {
    toggle () {
      this.isShow = !this.isShow
    },
    rightToggle () {
      this.isRightShow = !this.isRightShow
    }
  }
}
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>
