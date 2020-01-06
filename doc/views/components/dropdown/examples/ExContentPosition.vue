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
          position="is-bottom-left"
          aria-role="menu"
        >
          <a
            slot="trigger"
            class="navbar-item"
            role="button"
          >
            <span>Login</span>
            <s-icon icon="menu-down" />
          </a>

          <s-dropdown-item
            aria-role="menu-item"
            :focusable="false"
            custom
            paddingless
          >
            <form action="">
              <div
                class="modal-card"
                style="width:300px;"
              >
                <section class="modal-card-body">
                  <s-field label="Email">
                    <s-input
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </s-field>

                  <s-field label="Password">
                    <s-input
                      type="password"
                      password-reveal
                      placeholder="Your password"
                      required
                    />
                  </s-field>

                  <s-checkbox>Remember me</s-checkbox>
                </section>
                <footer class="modal-card-foot">
                  <button class="button is-primary">
                    Login
                  </button>
                </footer>
              </div>
            </form>
          </s-dropdown-item>
        </s-dropdown>
      </div>
    </div>
  </nav>
</template>
