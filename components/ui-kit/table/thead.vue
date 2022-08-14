<template>
  <div class="ui-thead">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiThead"
}
</script>

<style scoped>
  .ui-thead{
    display: table-header-group;
  }
</style>
