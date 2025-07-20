<script setup>
const userInputText = defineModel('userInput')
const userInputTextArea = defineModel('userInputTextArea')
const isChecked = defineModel('isChecked')
const programings = defineModel('programings')
const gender = defineModel('gender')
const selected = defineModel('selected')
</script>
<template>
  <div class="form-content">
    <div class="input-area">
      <h2>TextBox</h2>
      <input type="text" v-model="userInputText" />
    </div>
    <div class="input-area">
      <h2>TextArea</h2>
      <textarea v-model="userInputTextArea"></textarea>
    </div>
    <div class="input-area">
      <h2>CheckBox</h2>
      <input type="checkbox" id="check-box" v-model="isChecked" true-value="Checked" false-value="UnChecked">
      <label for="check-box">{{ isChecked }}</label>
      <h3>Many CheckBox</h3>
      <input type="checkbox" id="python" v-model="programings" value="Python">
      <label for="python">Python</label>
      <input type="checkbox" id="vue" v-model="programings" value="Vue.js">
      <label for="vue">Vue.js</label>
      <input type="checkbox" id="java" v-model="programings" value="Java">
      <label for="java">Java</label>
    </div>
    <div class="input-area">
      <h2>Radio</h2>
      <input type="radio" id="male" v-model="gender" value="男性" />
      <label for="male">男性</label>
      <input type="radio" id="female" v-model="gender" value="女性" />
      <label for="female">女性</label>
    </div>
    <div class="input-area">
      <h2>Select</h2>
      <select v-model="selected">
        <option value="" disabled>Select One Option</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
   </div>
</template>
<style scoped>
h2 {
  color: #364e96;/*文字色*/
  border: solid 3px #364e96;/*線色*/
  padding: 0.5em;/*文字周りの余白*/
  border-radius: 0.5em;/*角丸*/
}
.input-area {
    padding: 0.5em 1em;
    margin: 2em 0;
    font-weight: bold;
    color: #6091d3;/*文字色*/
    background: #FFF;
    border: solid 3px #6091d3;/*線*/
    border-radius: 10px;/*角の丸み*/
}
.input-area * {
    margin: 0;
    padding: 0;
}

</style>
