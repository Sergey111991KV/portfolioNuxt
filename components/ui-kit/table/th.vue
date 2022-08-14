<template>
  <div class="ui-th">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiTh"
}
</script>

<style scoped>
.ui-th{
  display: table-cell;
}
</style>
