<template>
  <div class="ui-table">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiTable"
}
</script>

<style scoped>
.ui-table{
  display: table;
  width: 100%;
  margin-block: -5px;
  border-spacing: 0 5px;
}

</style>
