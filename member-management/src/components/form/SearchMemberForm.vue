<script setup>
import { ref } from 'vue'
const emits = defineEmits(['searchSubmit', 'resetMember'])
const searchName = ref('')
const selectDepartment = ref('')
const selectPost = ref('')
// ここでWebAPIを用いて所属部署と役職の一覧を取得して設定
const departments = ref(["システム1課","システム2課"])
const posts = ref(["部長","副部長","主任","副主任","役職なし"])

function onSearchSubmit(){
  const emitData = {
    name: searchName,
    department: selectDepartment,
    post: selectPost
  }
  emits('searchSubmit',emitData)
}

function resetValue(){
  searchName.value = ''
  selectDepartment.value = ''
  selectPost.value = ''
  emits('resetMember')
}
</script>
<template>
  <div class="member-search-container">
    <div class="search-inputs">
      <div class="form-group">
        <label for="searchName">氏名：</label>
        <input id="searchName" type="text" v-model="searchName" />
      </div>
      <div class="form-group">
        <label for="selectDepartment">所属：</label>
        <select id="selectDepartment" v-model="selectDepartment">
          <option value="">すべて</option>
          <option v-for="depart in departments" :key="depart" :value="depart">{{ depart }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="selectPost">役職：</label>
        <select id="selectPost" v-model="selectPost">
          <option value="">すべて</option>
          <option v-for="pos in posts" :key="pos" :value="pos">{{ pos }}</option>
        </select>
      </div>
    </div>
    <div class="search-actions">
      <button class="search-button" @click="onSearchSubmit">検索</button>
      <button class="reset-button" @click="resetValue">クリア</button>
    </div>
  </div>
</template>
<style scoped>
.member-search-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.search-inputs {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #495057;
}

.form-group input[type="text"],
.form-group select {
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  min-width: 180px;
}

.search-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.search-actions button {
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.search-button {
  background-color: #007bff;
  color: white;
}
.search-button:hover {
  background-color: #0056b3;
}

.reset-button {
  background-color: #6c757d;
  color: white;
}
.reset-button:hover {
  background-color: #5a6268;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .member-search-container {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }

  .search-inputs {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }

  .form-group input[type="text"],
  .form-group select {
    min-width: 0; /* 最小幅をリセット */
  }

  .search-actions {
    flex-direction: row;
    gap: 1rem;
  }

  .search-actions button {
    flex-grow: 1; /* ボタン幅を均等にする */
  }
}
</style>
