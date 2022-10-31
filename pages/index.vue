<template>
  <div>
    Start test project nuxt/vue
    <nav>
      <a href="/service">my service</a>
      <a href="/requests">requests</a>
      <a href="/test-plugin">test-plugin</a>
      <a href="/lifehooks">lifehooks</a>
      <a href="/using-plugins">using-plugins</a>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    this.$toaster.showToast({
      content: 'Successfully logged in!',
      state: 'success'
    })
  }
}
</script>
