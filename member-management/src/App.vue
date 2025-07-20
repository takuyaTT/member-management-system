<script setup>
import CommonHeader from './components/header/CommonHeader.vue';
import CommonFooter from './components/footer/CommonFooter.vue';
import { logoutUser, getAuth } from './components/tools/utils/auth.js'
import { useRouter } from 'vue-router';
import { ref,  onUnmounted} from 'vue'

const userName = ref('');
const isLogin = ref(false);
const role = ref(0)
const router = useRouter();
let auth = getAuth();
// 認証情報が存在する場合はcreate時に設定
if(auth){
  userName.value = auth.userName;
  isLogin.value = true;
  role.value = auth.role;
}

// ログアウト処理
function handleLogout() {
  logoutUser();
  isLogin.value = false

  // ログイン画面へ遷移
  router.push({
    name: "login"
  });
}

// コンポーネント削除時、ログインデータ削除
onUnmounted(()=>{
  logoutUser();
})

// ログイン処理
function handleLogin(emitData){
  // 正常ユーザー（お試し）
  userName.value = emitData.userName;
  isLogin.value = true;
  // 権限を取得
  auth = getAuth();
  role.value = auth.role;
  // ホーム画面へ遷移
  router.push({
    name: "menu"
  });
}
</script>
<template>
  <div>
    <CommonHeader
    :userName="userName"
    :isLogin="isLogin"
    @logout="handleLogout"/>
    <RouterView
      :isLogin="isLogin"
      :role="role"
      @login="handleLogin"
      @logout="handleLogout"/>
    <CommonFooter />
  </div>
</template>
<style scoped>
* {
  text-align: center;
}
</style>
