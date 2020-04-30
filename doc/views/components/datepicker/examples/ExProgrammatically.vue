<template>
  <section>
    <s-field>
      <s-datepicker
        ref="datepicker"
        expanded
        placeholder="Select a date"
      />
      <s-button
        icon-left="calendar-today"
        type="is-primary"
        @click="$refs.datepicker.toggle()"
      />
    </s-field>
  </section>
</template>
