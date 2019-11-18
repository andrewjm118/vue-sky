<template>
  <section>
    <s-field>
      <s-input
        placeholder="Search..."
        type="search"
        icon="magnify"
      />
      <p class="control">
        <button class="button is-primary">
          Search
        </button>
      </p>
    </s-field>

    <s-field>
      <s-input
        placeholder="This is expanded"
        expanded
      />
      <p class="control">
        <span class="button is-static">@gmail.com</span>
      </p>
    </s-field>

    <hr>

    <s-field>
      <s-select placeholder="Currency">
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </s-select>
      <s-input
        type="number"
        placeholder="0,00"
      />
      <p class="control">
        <button class="button is-success">
          Transfer
        </button>
      </p>
    </s-field>

    <s-field>
      <p class="control">
        <button class="button">
          <s-icon icon="format-bold" />
        </button>
      </p>
      <p class="control">
        <button class="button">
          <s-icon icon="format-italic" />
        </button>
      </p>
      <p class="control">
        <button class="button">
          <s-icon icon="format-underline" />
        </button>
      </p>
      <p class="control">
        <button class="button">
          <s-icon icon="format-align-left" />
        </button>
      </p>
      <p class="control">
        <button class="button">
          <s-icon icon="format-align-center" />
        </button>
      </p>
      <p class="control">
        <button class="button">
          <s-icon icon="format-align-right" />
        </button>
      </p>
      <s-input
        placeholder="Search..."
        type="search"
        icon="magnify"
      />
    </s-field>

    <s-field>
      <p class="control">
        <button class="button is-primary">
          Button
        </button>
      </p>
      <p class="control">
        <s-dropdown>
          <button
            slot="trigger"
            class="button is-primary"
          >
            <s-icon icon="menu-down" />
          </button>

          <s-dropdown-item>Action</s-dropdown-item>
          <s-dropdown-item>Another action</s-dropdown-item>
          <s-dropdown-item>Something else</s-dropdown-item>
        </s-dropdown>
      </p>
    </s-field>

    <s-field>
      <p class="control">
        <s-dropdown>
          <button
            slot="trigger"
            class="button"
          >
            <span>Filters</span>
            <s-icon icon="menu-down" />
          </button>

          <s-dropdown-item value="open_issues">
            Open Issues and Pull Requests
          </s-dropdown-item>
          <s-dropdown-item value="your_issues">
            Your Issues
          </s-dropdown-item>
          <s-dropdown-item value="pull_requests">
            Your Pull Requests
          </s-dropdown-item>
          <s-dropdown-item value="everything">
            Everything
          </s-dropdown-item>
        </s-dropdown>
      </p>
      <s-input
        icon="magnify"
        type="search"
        placeholder="Search..."
      />
    </s-field>
  </section>
</template>
