<template>
  <div class="ui-tr">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiTr"
}
</script>

<style scoped>
  .ui-tr{
    display: table-row;
  }
</style>
