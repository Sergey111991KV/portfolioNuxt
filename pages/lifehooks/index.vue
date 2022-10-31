<template>
  <div>
    <div>
      <h3>Life Cycle Hooks</h3>
      <input>
    </div>
  </div>
</template>

<script>
export default {
  name: "LifeCycleHooks",
  data: () => ({
    posts: []
  }),
  async fetch() {
    this.posts = await this.$http.$get('https://api.nuxtjs.dev/posts')
    console.log('async fetch')
  },
  async asyncData({ params, http }) {
    const post = await fetch('https://api.nuxtjs.dev/posts/1')
    console.log('async asyncData')
    return { post }
  }
}
</script>

<style>

</style>
