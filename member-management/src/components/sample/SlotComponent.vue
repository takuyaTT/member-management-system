<script setup>
import { ref } from 'vue'

const count = ref(0);
</script>
<template>
  <div class="parent-div">
    <slot name="slot-content" :count="count"/>
    <button @click="count++">count-up</button>
  </div>
</template>
<style scoped>
.parent-div{
  margin: auto;
  text-align: center;
}
</style>
