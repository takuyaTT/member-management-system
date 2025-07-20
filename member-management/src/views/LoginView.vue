<template>
  <div class="login-container">
    <h2>ログイン</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">ログイン</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

function handleLogin() {
  if (email.value === 'test@example.com' && password.value === 'password123') {
    alert('ログイン成功！')
    // ここでルーターなどで画面遷移もできます
  } else {
    errorMessage.value = 'メールアドレスまたはパスワードが正しくありません。'
  }
}
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
input {
  width: 100%;
  margin: 0.5rem 0 1rem;
}
.error {
  color: red;
  margin-top: 1rem;
}
</style>
