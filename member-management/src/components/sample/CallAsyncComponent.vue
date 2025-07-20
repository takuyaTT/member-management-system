<script setup>
  import {shallowRef, defineAsyncComponent } from 'vue'
  import CompA from './components/DynamicComponentA.vue'
  // import CompB from './components/DynamicComponentB.vue'
  import CompC from './components/DynamicComponentC.vue'
  import BaseLoader from './components/BaseLoader.vue'

  // 定数定義
  // const currentComp = ref(CompA)
  const currentComp = shallowRef(CompA)
  const CompB = defineAsyncComponent({
    loader: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(import('./components/DynamicComponentB.vue'))
        }, 3000) // 3秒の遅延をシミュレート
      })
    },
    loadingComponent: BaseLoader,
    delay: 2000
  })
</script>
<template>
  <div>
    <button @click="currentComp = CompA">A</button>
    <button @click="currentComp = CompB">B</button>
    <button @click="currentComp = CompC">C</button>
    <component :is="currentComp"></component>
  </div>
</template>
<style scoped>
</style>
