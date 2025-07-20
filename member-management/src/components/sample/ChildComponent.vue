<script setup>
defineProps({
  count: {
    type: Number,
    default: 100
  }
});
const emits = defineEmits(['reset'])

function resetEmit(){
  emits('reset', 100);
}
</script>

<template>
  <div>
    count: {{ count }}
    <!-- <button @click="$emit('reset', 100)">Reset</button> -->
    <button @click="resetEmit">Reset</button>
  </div>
</template>
