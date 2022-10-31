<template>
  <div>
    SVG
    <div>
      <NuxtLogo />
    </div>
  </div>
</template>

<script>
import NuxtLogo from "@/assets/svg/nuxt.svg?inline";

export default {
  name: 'SVGPage',
  components: { NuxtLogo },

}
</script>
