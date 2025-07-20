<script setup>
import { ref, computed } from 'vue'

const userName = ref('')
const password = ref('')
const userNameError = ref('')
const passwordError = ref('')

const emit = defineEmits(['pushSubmit'])

// ユーザーIDのバリデーション
function validateUserName() {
  if (!/^\d{5}$/.test(userName.value)) {
    userNameError.value = 'ユーザーIDは数字5桁で入力してください。'
  } else {
    userNameError.value = ''
  }
}

// パスワードのバリデーション
function validatePassword() {
  if (password.value.length === 0) {
    passwordError.value = 'パスワードを入力してください。'
  } else {
    passwordError.value = ''
  }
}

// フォーム全体のバリデーション状態
const isFormValid = computed(() => {
  return userName.value.length > 0 && password.value.length > 0 && !userNameError.value && !passwordError.value
})

function pushSubmit() {
  // 送信前にもう一度バリデーションを実行
  validateUserName()
  validatePassword()

  if (isFormValid.value) {
    emit('pushSubmit', { userName: userName.value, password: password.value })
  }
}
</script>
<template>
  <div class="login">
    <div class="login-triangle"></div>
    <h2 class="login-header">Log in</h2>
    <form class="login-container" @submit.prevent="pushSubmit">
      <p>
        <input
          type="text"
          placeholder="ユーザID"
          v-model="userName"
          @input="validateUserName"
          @blur="validateUserName"
        />
      </p>
      <p class="error-msg" v-if="userNameError">{{ userNameError }}</p>
      <p>
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          @input="validatePassword"
          @blur="validatePassword"
        />
      </p>
      <p class="error-msg" v-if="passwordError">{{ passwordError }}</p>
      <p><input type="submit" value="Login" :disabled="!isFormValid" /></p>
    </form>
  </div>
</template>
<style scoped>
  body {
    background: #456;
    font-family: 'Open Sans', sans-serif;
  }

  .login {
    width: 400px;
    margin: 16px auto;
    font-size: 16px;
  }

  /* Reset top and bottom margins from certain elements */
  .login-header,
  .login p {
    margin-top: 0;
    margin-bottom: 0;
  }

  /* The triangle form is achieved by a CSS hack */
  .login-triangle {
    width: 0;
    margin-right: auto;
    margin-left: auto;
    border: 12px solid transparent;
    border-bottom-color: #28d;
  }

  .login-header {
    background: #28d;
    padding: 20px;
    font-size: 1.4em;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
  }

  .login-container {
    background: #ebebeb;
    padding: 12px;
  }

  /* Every row inside .login-container is defined with p tags */
  .login p {
    padding: 12px;
  }

  .login input {
    box-sizing: border-box;
    display: block;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    padding: 16px;
    outline: 0;
    font-family: inherit;
    font-size: 0.95em;
  }

  .login input[type="email"],
  .login input[type="password"] {
    background: #fff;
    border-color: #bbb;
    color: #555;
  }

  /* Text fields' focus effect */
  .login input[type="email"]:focus,
  .login input[type="password"]:focus {
    border-color: #888;
  }

  .login input[type="submit"]:disabled {
    background: #555;
    border-color: transparent;
    color: #fff;
    cursor: pointer;
  }

  .login input[type="submit"] {
    background: #28d;
    border-color: transparent;
    color: #fff;
    cursor: pointer;
  }

  .login input[type="submit"]:disabled:hover {
    background: #555;
  }

  .login input[type="submit"]:hover {
    background: #17c;
  }

  /* Buttons' focus effect */
  .login input[type="submit"]:focus {
    border-color: #05a;
  }

  .error-msg {
    color: red;
  }
</style>
