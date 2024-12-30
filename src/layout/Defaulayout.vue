<script setup>
import Headerlayout from './headerlayout.vue';
import { useRoute } from 'vue-router';
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const isToggle = ref(false);
const handleToggle = () => { 
  isToggle.value = !isToggle.value;
};

const closeSlidebar = () => {
  isToggle.value = false;
};

const route = useRoute();

</script>

<template>
<Headerlayout/>
  <div class="container">
   
    <div class="content">
        <RouterView/>
    </div>
    
  </div>
</template>

<style scoped>

</style>
