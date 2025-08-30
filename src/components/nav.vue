<template>
  <div class="nav" v-if="showNav">
    <div class="log">
      <p @click="log">->签到</p>
    </div>
    <div class="out">
      <p @click="out">->签退</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { computed ,ref} from 'vue';
import {checkOut} from "../api/login" 
import {CheckOutRequest } from '../types/check'
const router = useRouter();
const route = useRoute();
const token = ref(localStorage.getItem('token'));
const showNav = computed(() => route.meta.nav);
function log() {
  router.push('/login');
  
}
const out=async()=> {
  router.push('/login');
 try {
  const studentID = localStorage.getItem('studentID');
  const score = new Int16Array([100]); 
  const checkOutRequest: CheckOutRequest = {
      StudentID: studentID || '',
      Score: score,
    };
  await checkOut(checkOutRequest);;
  alert("签退成功");
} catch (error) {
  console.error(error);
  alert("签退失败");
}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
.nav {
  width: 300px;
  font-size: 30px;
  background-color: whitesmoke;
  text-align: center;
}
.nav p {
  margin-top: 40px;
}
</style>