<template>
  <div class="container">
    <h3>Color-mode</h3>
     <div class="container__side_left">
       <p>install:</p>
       <p>npm install --save-dev @nuxtjs/color-mode</p>
       <p>
         export default {
         buildModules: ['@nuxtjs/color-mode']
         }
       </p>
       <p>assets/main.css</p>
       <p>
         :root {
         --color: #243746;
         --color-primary: #158876;
         --color-secondary: #0e2233;
         --bg: #f3f5f4;
         --bg-secondary: #fff;
         --border-color: #ddd;
         }

         .dark-mode {
         --color: #ebf4f1;
         --color-primary: #41b38a;
         --color-secondary: #fdf9f3;
         --bg: #091a28;
         --bg-secondary: #071521;
         --border-color: #0d2538;
         }
         .sepia-mode {
         --color: #433422;
         --color-secondary: #504231;
         --bg: #f1e7d0;
         --bg-secondary: #eae0c9;
         --border-color: #ded0bf;
         }

         body {
         font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
         Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
         background-color: var(--bg);
         color: var(--color);
         transition: background-color 0.3s;
         }
         a {
         color: var(--color-primary);
         }
       </p>
       <p>nuxt.config.js css: ['@/assets/main.css']</p>


       <Input></Input>
       <button @click="copy">copy</button>
   </div>
    <ul>
      <li v-for="color of colors" :key="color">
        <component
          :is="`icon-${color}`"
          @click="$colorMode.preference = color"
          style="height: var(--normal-svg); width: var(--normal-svg)"
          :class="getClasses(color)"
        />
      </li>
    </ul>
    <p>
      <ColorScheme placeholder="..." tag="span">
        Color mode: <b>{{ $colorMode.preference }}</b>
        <span v-if="$colorMode.preference === 'system'">&nbsp;(<i>{{ $colorMode.value }}</i> mode detected)</span>
      </ColorScheme>
    </p>
  </div>

</template>

<script>
import Input from "@/components/ui-kit/input";
import IconSystem from '@/assets/svg/system.svg?inline'
import IconLight from '@/assets/svg/light.svg?inline'
import IconDark from '@/assets/svg/dark.svg?inline'
import IconSepia from '@/assets/svg/sepia.svg?inline'

export default {
  name: 'UsingPluginsPage',
  components: {
    Input,
    IconSystem,
    IconLight,
    IconDark,
    IconSepia
  },
  // mounted() {
  //   this.$toaster.showToast({
  //     content: 'Successfully logged in!',
  //     state: 'success'
  //   })
  // }
  data() {
    return {
      colors: ['system', 'light', 'dark', 'sepia']
    }
  },
  methods: {
    copy () {
    },
    getClasses (color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>

<style scoped>
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}
.feather.selected {
  color: var(--color-primary);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  padding: 5px;
}
p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}
.container {
  text-align: center;
  padding: 50px;
}
.container__side_left{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
