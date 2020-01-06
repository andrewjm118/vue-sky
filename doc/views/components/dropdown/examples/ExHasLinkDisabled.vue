<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img
          src="/static/img/logo.png"
          alt="Vue"
        >
      </a>
      <a class="navbar-item"><s-icon
        pack="fab"
        icon="github"
      /></a>
      <a class="navbar-item"><s-icon
        pack="fab"
        icon="twitter"
      /></a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <s-dropdown
          v-model="navigation"
          position="is-bottom-left"
          aria-role="menu"
        >
          <a
            slot="trigger"
            class="navbar-item"
            role="button"
          >
            <span>Menu</span>
            <s-icon icon="menu-down" />
          </a>

          <s-dropdown-item
            custom
            aria-role="menuitem"
          >
            Logged as <b>Andrew Jm</b>
          </s-dropdown-item>
          <hr class="dropdown-divider">
          <s-dropdown-item
            has-link
            aria-role="menuitem"
          >
            <a
              href="https://google.com"
              target="_blank"
            >
              <s-icon icon="link" />
              Google (link)
            </a>
          </s-dropdown-item>
          <s-dropdown-item
            value="home"
            aria-role="menuitem"
          >
            <s-icon icon="home" />
            Home
          </s-dropdown-item>
          <s-dropdown-item
            value="products"
            aria-role="menuitem"
          >
            <s-icon icon="cart" />
            Products
          </s-dropdown-item>
          <s-dropdown-item
            value="blog"
            disabled
            aria-role="menuitem"
          >
            <s-icon icon="book-open" />
            Blog
          </s-dropdown-item>
          <hr
            class="dropdown-divider"
            aria-role="menuitem"
          >
          <s-dropdown-item value="settings">
            <s-icon icon="settings" />
            Settings
          </s-dropdown-item>
          <s-dropdown-item
            value="logout"
            aria-role="menuitem"
          >
            <s-icon icon="logout" />
            Logout
          </s-dropdown-item>
        </s-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navigation: 'home'
    }
  }
}
</script>
