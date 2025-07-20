<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateTo(routeName) {
  // TODO: 将来的に各画面のルートが定義されたら、実際の遷移処理を実装する
  router.push({ name: routeName })
}

function readynavigateTo(routeName) {
  // TODO: 将来的に各画面のルートが定義されたら、実際の遷移処理を実装する
  alert(`「${routeName}」画面は現在準備中です。`)
}

</script>
<template>
  <div class="home-menu-container">
    <div class="menu-buttons">
      <button class="menu-button" @click="navigateTo('member')">
        メンバー一覧
      </button>
      <button class="menu-button" @click="readynavigateTo('MemberRegistration')">
        勤怠管理
      </button>
      <button class="menu-button" @click="readynavigateTo('Settings')">
        ライブラリ制度
      </button>
      <button class="menu-button" @click="readynavigateTo('Settings')">
        定期フォロー
      </button>
      <button class="menu-button" @click="readynavigateTo('Settings')">
        現場管理
      </button>
      <button class="menu-button" @click="readynavigateTo('Settings')">
        マスタ管理
      </button>
    </div>
  </div>
</template>
<style scoped>
.home-menu-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 2rem;
  color: #333;
}

.menu-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.menu-button {
  padding: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.menu-button:hover {
  background-color: #0056b3;
  transform: translateY(-5px);
}
</style>
