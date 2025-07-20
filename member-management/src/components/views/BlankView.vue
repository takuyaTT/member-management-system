<script setup>
import { useRouter } from 'vue-router';
const props = defineProps(["isLogin"])
const router = useRouter()
if(props){
  router.push({
    name: "menu"
  });
}else{
  router.push({
    name: "login"
  })
}
</script>
<template>
  BlankPage
</template>
