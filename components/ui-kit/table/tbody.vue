<template>
  <div class="ui-tbody">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiTbody"
}
</script>

<style scoped>
  .ui-tbody{
    display: table-row-group;
  }
</style>
