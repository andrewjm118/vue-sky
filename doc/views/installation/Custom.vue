<template>
  <div>
    <div class="media">
      <div class="media-left">
        <p class="title">
          1
        </p>
      </div>
      <div class="media-content">
        <p class="title">
          配置信息(<em>config</em>)
        </p>
        <CodeView
          :code="customConfig | pre"
          lang="javascript"
          expanded
        />
      </div>
    </div>
    <hr>
    <ApiView :data="api" />
    <div class="media">
      <div class="media-left">
        <p class="title">
          2
        </p>
      </div>
      <div class="media-content">
        <p class="title">
          设置变量,个性化定制
        </p>
        <CodeView
          :code="customTheme | pre"
          lang="javascript"
          expanded
        />
      </div>
    </div>
    <hr>
    <div class="title is-4">
      默认样式
    </div>
    <img
      src="@/assets/images/default.png"
    >
    <hr>
    <div class="title is-4">
      自定义样式
    </div>
    <CodeView
      :code="customThemeForm | pre"
      lang="javascript"
      expanded
    />
    <img
      src="@/assets/images/custom.png"
    >
  </div>
</template>
<script>
import api from './options'
export default {
  data () {
    return {
      api,
      customConfig: `
            Vue.use(VueSky, {
            defaultIconPack: 'fas',  // 采用的图标库 fas 代表 fontawesome mid 代表 materialdesignicons
            defaultIconPrev:'',      // 上一页图标样式 日期选择器，分页和步骤中使用
            defaultIconNext:'',      // 下一页图标样式 
            defaultNotificationDuration:2000,  // 通知框持续时间

            // ...
            })
            `,
      customTheme: `
      // Import Bulma's core
@import "~bulma/sass/utilities/_all";

        // 设置颜色
        $primary : #409eff;
        $twitter: #4099FF;
        $discord: #7289DA;
        $patreon: #f96854;
        $bulma: #00D1B2;
        $background:#fff;
        $warning: #99c9f8;
        
        // 颜色变量映射 (描述:'is-success,is-warning',例子:<s-button type="is-success"></s-button>)
        $colors: (
            "white": ($white, $black),
            "black": ($black, $white),
            "info": ($info, $info-invert),
            "success": ($success, $success-invert),
            "warning": ($warning, $warning-invert),
        );
    `,
      customThemeForm: `
      // 设定颜色
$purple: #8A4D76;
$pink: #FA7C91;
$brown: #757763;
$beige-light: #D0D1CD;
$beige-lighter: #EFF0EB;

// 更新Bulma的全局变量
$family-sans-serif: "Nunito", sans-serif;
$grey-dark: $brown;
$grey-light: $beige-light;
$primary: $purple;
$link: $pink;
$widescreen-enabled: false;
$fullhd-enabled: false;

// 更新变量
$body-background-color: $beige-lighter;
$control-border-width: 2px;
$input-border-color: transparent;
$input-shadow: none;
    `
    }
  }
}
</script>
