<template>
  <s-field grouped>
    <s-field
      label="Name"
      expanded
    >
      <s-field>
        <s-select placeholder="Title">
          <option>Mr.</option>
          <option>Ms.</option>
        </s-select>
        <s-input
          placeholder="Name"
          expanded
        />
      </s-field>
    </s-field>
    <s-field
      label="Email"
      expanded
    >
      <s-input placeholder="some@email.com" />
    </s-field>
  </s-field>
</template>
