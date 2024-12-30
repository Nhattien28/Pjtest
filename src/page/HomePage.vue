<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Post from '@/components/Post.vue';
import Footer from '@/layout/Footer.vue';

const Listpost = ref([]);




const getAllContent = () => {
    axios
        .get(import.meta.env.VITE_BASE_API + "/sblog")
        .then((response) => {
            console.log(response.data);
            Listpost.value = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};


onMounted(() => {
    getAllContent();
});
</script>

<template>

    <body>
        <div class="search">
            <input type="text" placeholder="Nhập từ khóa tìm kiếm ">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <h3>ALL POST</h3>
        <div class="header">
            <Post 
             v-for="(article, index) in Listpost"
        :key="index"
        :id="article.id"
        :title="article.title"
        :author="article.author"
        :content="article.content">
              
            </Post>
        </div>

    </body>
    <Footer/>

</template>

<style scoped>
body {
    padding: 12px 92px;
    display: flex;
    flex-direction: column;

}

h3 {
    font-size: 10px;
    padding: 30px;
}
.header {
  display: flex;
  flex-wrap: wrap;
  gap: 50px 24px;
  margin-bottom: 180px;
}

.search {
    width: 90%;
    display: flex;
    padding: 10px;
    gap: 16px;
}

.search input {
    flex: 1;
    border: none;
    background-color: transparent;
    outline: none;

}

.content-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
}

.post {

    padding: 20px;
    text-align: center;
}

.post img {
    max-width: 70%;
    height: auto;
    margin-bottom: 10px;
}

.post-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.post-author {
    color: #888;
    font-size: 14px;
    margin-bottom: 5px;
}
</style>
