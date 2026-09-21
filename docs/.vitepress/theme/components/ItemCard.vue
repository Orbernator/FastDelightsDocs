<template>
    <a 
        :href="withBase(itemUrl)"
        class="card"
    >
        <img
            :src="withBase(item.icon)"
            :alt="item.name"
        />
        <div class="info">
            <strong>
                {{ item.name }}
            </strong>
            <small>
                {{ item.mod }}
            </small>
        </div>
    </a>
</template>
<script setup lang="ts">
import {computed} from 'vue'
import {withBase} from 'vitepress'
interface Item {
    id: string
    name: string
    icon: string
}
const props = defineProps<{
    item: Item
}>()
const itemUrl = computed(() => {
    const slug = props.item.id
        .replace(":", "-")
        .replaceAll('_', '-')
    return `/items/${slug}`
})
</script>
<style scoped>
.card {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px;
    background: #222;
    border: 1px solid #444;
    color: white;
    text-decoration: none;
    transition: 0.15s;
}
.card:hover {
    background: #333;
    transform: translateY(-2px);
}
.card img {
    width: 48px;
    height: 48px;
    image-rendering: pixelated;
}
.info strong {
    display: block;
}
.info small {
    display: block;
    margin-top: 4px;
    color: #999;
}
</style>