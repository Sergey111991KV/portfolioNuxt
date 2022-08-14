<template>
  <div>
    <header>
      <div class="container">

      </div>
    </header>
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {}
  }
}
</script>

<style scoped>
  header{
    height: 70px;
    background-color: #42b883;
  }
  .container{

  }
</style>
