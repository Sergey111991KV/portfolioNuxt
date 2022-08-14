<template>
  <div class="ui-td">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiTd"
}
</script>

<style scoped>
  .ui-td{
    display: table-cell;
    overflow-wrap: break-word;
    vertical-align: top;
  }
</style>
