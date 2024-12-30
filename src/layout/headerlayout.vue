<script setup>
import { computed } from 'vue';
import { useRouter,useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const toPage = (page)=>{
  router.push(page)
}
const currentPage = computed(()=>{
  return route.path
})

</script>

<template>
  <header class="header">
    <div class="logo" @click="toPage('/')">Bahram</div>
    <div class="narbar">
      <div class="nar-topic" :class="{'active':currentPage ==='/'}" @click="toPage('/')">New</div>
      <div class="nar-topic" :class="{'active':currentPage ==='/list'}"@click="toPage('/list')">Reading list</div>
      <div class="nar-topic" :class="{'active':currentPage ==='/info'}"@click="toPage('/info')">Topic</div>
      <div class="nar-topic" :class="{'active':currentPage ==='/create'}"@click="toPage('/create')">Create</div>
    </div>
  </header>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Times New Roman', Times, serif;
}
body{
  color: aliceblue;
}
.header{
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 10%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}
.logo{
  position: relative;
  font-size: 25px;
  color: black;
  text-decoration: none;
  font-weight: 600;
}
.narbar .nar-topic {
  display: inline-block;
  font-size: 20px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  margin-left: 56px;
  transition: .3s;
  padding: 10px 16px;

}
.nar-topic.active{
  color: #ff5480;
}
.narbar .nar-topic:hover{
  background-color: #9283E0;
  color: white;
  border-radius: 15%;
  
}

</style>
