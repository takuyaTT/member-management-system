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
    <h2 class="header-title">メンバー管理システム</h2>
    <div class="user-info" v-if="props.isLogin">
      <span>ログイン：{{ props.userName }}</span>
      <button @click="pushLogout">ログアウト</button>
    </div>
  </header>
</template>
<style scoped>
header {
  display: grid;
  grid-template-columns: 1fr auto 1fr; /* 3つのカラムを作成 (左, 中央, 右) */
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.header-title {
  grid-column: 2 / 3; /* 中央のカラムに配置 */
  margin: 0;
  font-size: 1.5rem;
  color: #343a40;
  text-align: center;
}

.user-info {
  grid-column: 3 / 4; /* 右のカラムに配置 */
  justify-self: end; /* グリッドセル内で右寄せ */
  display: flex;
  align-items: center;
  gap: 1rem; /* 要素間のスペース */
}

.user-info span {
  font-size: 0.9rem;
}

.user-info button {
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.user-info button:hover {
  background-color: #0056b3;
}

/* レスポンシブ対応 (スマートフォンなど) */
@media (max-width: 768px) {
  header {
    grid-template-columns: 1fr; /* 1カラムレイアウトに変更 */
    grid-template-rows: auto auto; /* 2行レイアウトに変更 */
    gap: 0.5rem; /* 行間のスペース */
    padding: 0.8rem 1rem; /* パディングを調整 */
  }

  .header-title {
    grid-row: 1 / 2; /* 1行目に配置 */
    grid-column: 1 / 2; /* 全幅を占める */
    font-size: 1.2rem; /* フォントサイズを少し小さく */
  }

  .user-info {
    grid-row: 2 / 2; /* 2行目に配置 */
    grid-column: 1 / 2; /* 全幅を占める */
    justify-self: center; /* 中央寄せに変更 */
    flex-direction: column; /* 縦並びにする */
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
