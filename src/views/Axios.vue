<template>
  <a href="https://axios-http.com/" target="_blank">
    <image
      width="350"
      height="250"
      src="https://www.cloudflare.com/static/5531192ab5f6d3ec166ea18f867f9835/Axios-twitter-og.png"
    />
  </a>
  <h1>Welcome to Your Vue.js + TypeScript App</h1>
  <h2>Powered by axios</h2>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank"> Vetur </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>
  <p>
    <a href="https://next.vuex.vuejs.org/" target="_blank"> Vuex-next Docs </a>
  </p>
  <p>
    Click the button !
    <button type="button" @click="count++">count is: {{ count }}</button>
  </p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'Vuex',
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>

<style lang="less" scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
