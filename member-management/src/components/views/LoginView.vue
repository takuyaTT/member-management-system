<script setup>
import LoginForm from '@/components/form/LoginForm.vue'
import { loginUser } from '@/components/tools/utils/auth.js'

const emits = defineEmits(["login"])
function login(emitData){
  const userName = emitData.userName
  const password = emitData.password
  if(loginUser(userName, password)){
    emits("login",{userName: userName})
  }else {
    alert(`ログインに失敗しました。`)
    console.log("ログイン失敗")
  }

}
</script>

<template>
  <div>
    <LoginForm
      @pushSubmit="login" />
  </div>
</template>

<style scoped></style>
