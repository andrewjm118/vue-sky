<template>
  <div>
    <div class="buttons">
      <s-button
        type="is-primary"
        @click="toggle"
      >
        基本模态框
      </s-button>
      <s-button
        type="is-primary"
        @click="toggle2"
      >
        自定义按钮文字
      </s-button>
      <s-button
        type="is-primary"
        @click="toggle3"
      >
        禁用backdrop遮罩层
      </s-button>
      <s-button
        type="is-primary"
        @click="toggle4"
      >
        禁用backdrop遮罩层关闭
      </s-button>
    </div>
    <s-modal
      title="Modal!"
      :width="520"
      :is-show="isShow"
      transition="fadeDown"
      @close="isShow=false"
    >
      <h4>Text in a modal</h4>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna,
        vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
    </s-modal>

    <s-modal
      title="自定义按钮文字"
      :is-show="isShow2"
      :show-header="true"
      ok-text="确定"
      cancel-text="取消"
      @close="isShow2=false"
    >
      <h4>Text in a modal</h4>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna,
        vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
    </s-modal>

    <s-modal
      title="禁用backdrop背景"
      :backdrop="false"
      :is-show="isShow3"
      @close="isShow3=false"
    >
      <h4>Text in a modal</h4>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna,
        vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
    </s-modal>

    <s-modal
      title="禁用遮罩层关闭"
      :backdrop-closable="false"
      :is-show="isShow4"
      @close="isShow4=false"
    >
      <h4>Text in a modal</h4>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna,
        vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
    </s-modal>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      isShow: false,
      isShow2: false,
      isShow3: false,
      isShow4: false
    }
  },
  methods: {
    toggle () {
      this.isShow = !this.isShow
    },
    toggle2 () {
      this.isShow2 = !this.isShow2
    },
    toggle3 () {
      this.isShow3 = !this.isShow3
    },
    toggle4 () {
      this.isShow4 = !this.isShow4
    }
  }
}
</script>

<style>

</style>
