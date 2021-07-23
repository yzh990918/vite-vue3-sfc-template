<template>
  <a href="https://pinia.esm.dev/" target="_blank">
    <image width="250" height="250" src="https://pinia.esm.dev/logo.svg" />
  </a>
  <h1>Welcome to Your Vue.js + TypeScript App</h1>
  <h2>Powered by Pinia</h2>

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
    Click the button to test actions !
    <button type="button" @click="doubleCount">count is: {{ count }}</button>
  </p>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from 'vue';
import { useAppStoreHook } from '@/store/module/app';
export default defineComponent({
  name: 'Pinia',
  setup: () => {
    const piniaApp = useAppStoreHook();

    const state = reactive({
      count: computed(() => piniaApp.count),
      // count: piniaApp.getCount,
    });

    // const count = piniaApp.getCount()

    const doubleCount = () => {
      piniaApp.DOUBLE_COUNT();
    };

    return {
      ...toRefs(state),
      doubleCount,
    };
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
