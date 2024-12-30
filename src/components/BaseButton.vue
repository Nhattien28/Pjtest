<script setup>
const props = defineProps({
  title: String,
});
</script>
<template>
  <button class="base-btn">
    {{ title }}
  </button>
</template>

<style scoped>
.base-btn {
  color: white;
  background: #9283e0;
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 1.1rem;
}

.base-btn:hover {
  opacity: 0.9;
  cursor: pointer;
}
</style>