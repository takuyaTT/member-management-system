<script setup>
import SearchMemberForm from '@/components/form/SearchMemberForm.vue'
import { ref, computed } from 'vue'

const memberList = ref([])
const currentPage = ref(1)
const itemsPerPage = 15

// WebAPI実施(全ユーザを取得)
// ここではダミーデータを表示
const dummyData = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    name: `メンバー ${i + 1}`,
    department: `開発${(i % 3) + 1}部`,
    post: i % 5 === 0 ? 'リーダー' : 'メンバー',
    joingCompanyYmd: `2020/${(i % 12) + 1}/1`,
    age: `${25 + (i % 10)}歳`,
  }));
memberList.value = dummyData;

// ページネーションされたメンバーリスト
const paginatedMembers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return memberList.value.slice(start, end)
})

// 総ページ数
const totalPages = computed(() => {
  return Math.ceil(memberList.value.length / itemsPerPage)
})

function handlerSearch(emitData) {
  const searchName = emitData.name.value
  const searchDepartment = emitData.department.value
  const searchPost = emitData.post.value
  console.log(searchName)
  console.log(searchDepartment)
  console.log(searchPost)
  // WebAPI実行
  // ここでは検索したと仮定して仮に値を設定
  const response = [{
    name: "かわうそ太郎",
    department: "システム1課",
    post: "部長",
    joingCompanyYmd: "2025/6/1",
    age: "60歳"
  }]
  memberList.value = response
  currentPage.value = 1 // 新しい検索が実行されたら1ページ目に戻る
}

function haldlerReset(){
  // WebAPI呼び出し
  // ここではダミーデータ投入
  const dummyData = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    name: `メンバー ${i + 1}`,
    department: `開発${(i % 3) + 1}部`,
    post: i % 5 === 0 ? 'リーダー' : 'メンバー',
    joingCompanyYmd: `2020/${(i % 12) + 1}/1`,
    age: `${25 + (i % 10)}歳`,
  }));
  memberList.value = dummyData;
}

function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

function goToDetail(member) {
  // TODO: 将来的に詳細画面へのルートが定義されたら、実際の遷移処理を実装する
  // router.push({ name: 'member-detail', params: { id: member.id } })
  alert(`「${member.name}」さんの詳細画面は現在準備中です。`)
}
</script>

<template>
  <div class="member-content-container">
    <SearchMemberForm
      @searchSubmit="handlerSearch"
      @resetMember="haldlerReset" />
    <div class="member-list-container">
      <div class="table-wrapper">
        <table v-if="paginatedMembers.length > 0">
          <thead>
            <tr>
            <th>氏名</th>
            <th>所属</th>
            <th>役職</th>
            <th>入社年月</th>
            <th>年齢</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in paginatedMembers" :key="member.id">
              <td class="member-name" @click="goToDetail(member)">{{ member.name }}</td>
              <td>{{ member.department }}</td>
              <td>{{ member.post }}</td>
              <td>{{ member.joingCompanyYmd }}</td>
              <td>{{ member.age }}</td>
            </tr>
          </tbody>
        </table>
        <p v-else class="no-results">検索結果がありません。</p>
      </div>
    </div>

    <!-- Pager -->
    <div v-if="totalPages > 1" class="pagination-container">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">前へ</button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
        次へ
      </button>
    </div>
  </div>
</template>
<style scoped>
.member-content-container {
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 1200px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.member-list-container {
  margin-top: 2rem;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

thead {
  background-color: #f8f9fa;
}

th,
td {
  padding: 12px 15px;
  border-bottom: 1px solid #dee2e6;
  white-space: nowrap; /* セルの内容が改行されないようにする */
}

th {
  font-weight: 600;
  color: #495057;
}

tbody tr:hover {
  background-color: #f1f3f5;
}

.member-name {
  color: #007bff;
  cursor: pointer;
  font-weight: 500;
}

.member-name:hover {
  text-decoration: underline;
}

.no-results {
  text-align: center;
  margin-top: 2rem;
  color: #6c757d;
}

.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 0.5rem;
}

.pagination-container button {
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  background-color: #fff;
  color: #007bff;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.pagination-container button:hover:not(:disabled) {
  background-color: #e9ecef;
}

.pagination-container button.active {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}

.pagination-container button:disabled {
  color: #6c757d;
  cursor: not-allowed;
  background-color: #f8f9fa;
}
</style>
