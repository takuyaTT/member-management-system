<script setup>
const props = defineProps(["userName", "isLogin"])
const emits = defineEmits(["logout"])
// 5分間隔でログイン情報が正しいか確認し、不正の場合はログインページへ飛ばす
function pushLogout(){
  emits("logout")
}
</script>
<template>
  <header>
    <h2>メンバー管理システム</h2>
    <div v-if="props.isLogin">
      ログイン：{{ props.userName }}
      <button @click="pushLogout">ログアウト</button>
    </div>
  </header>

</template>
<style scoped></style>
