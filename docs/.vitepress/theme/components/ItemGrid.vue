<template>
    <div class="grid">
        <itemCard
            v-for="item in items"
            :key="item.id"
            :item="item"
        />
    </div>
</template>
<script setup lang="ts">
import ItemCard from './ItemCard.vue'
interface Item {
    id: string
    name: string
    icon: string
}
defineProps<{
    items: Item[]
}>()
</script>
<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 12px;
}
</style>