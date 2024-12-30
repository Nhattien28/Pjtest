<script setup>
const props = defineProps({
    label: String,
    placeholder: String
})
</script>

<template>
    <div class="input-container">
        <div class="input-table">
            {{ label }}
        </div>
        <input type="text" class="input" :placeholder="placeholder"/>
    </div>
</template>

<style scoped>

.input-container{
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.input-table{
    font-size: 20px;
    font-weight: 500;
    color: black;
}


</style>
