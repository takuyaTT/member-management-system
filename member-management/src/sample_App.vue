<script setup>
import { ref } from 'vue'
import FormView from './components/sample/FormView.vue'

const userInput = ref('')
const userInputTextArea = ref('')
const isChecked = ref('UnCheked')
const programings = ref([])
const gender = ref('gender')
const selected = ref('')
</script>
<template>
  <main>

    <FormView
    v-model:userInput="userInput"
    v-model:userInputTextArea="userInputTextArea"
    v-model:isChecked="isChecked"
    v-model:programings="programings"
    v-model:gender="gender"
    v-model:selected="selected" />
    <div class="output-area">
      <p>text-box: {{ userInput }}</p>
      <p style="white-space: pre;">text-area: {{ userInputTextArea }}</p>
      <p>checkbox: {{ isChecked }}</p>
      <p>many-checkbox: {{ programings }}</p>
      <p>radio: {{ gender }}</p>
      <p>select: {{ selected }}</p>
    </div>
  </main>
</template>
<style scoped>
.output-area {
    padding: 0.5em 1em;
    margin: 2em 0;
    font-weight: bold;
    color: #6091d3;/*文字色*/
    background: #FFF;
    border: solid 3px #6091d3;/*線*/
    border-radius: 10px;/*角の丸み*/
}
</style>
