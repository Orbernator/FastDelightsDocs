<template>
    <a
        v-if="item"
        class="item-slot"
        :href="itemUrl"
        :title="item.name"
    >
        <img
            :src="withBase(item.icon)"
            :alt="item.name"
        />
    <span
        v-if="count !== undefined && count > 1"
        class="count"
    >
        {{ count }}
    </span>
    </a>
    <div
        v-else
        class="item-slot empty"
    />
</template>
<script setup lang="ts">
import { withBase } from 'vitepress'
import {computed} from 'vue'
interface Item {
    id: string
    name: string
    icon: string
}
const props = defineProps<{
    item?: Item
    count?: number
}>()
const itemUrl = computed(() => {
    if (!props.item) return '#'
    const slug = props.item.id
    .replace(':', '-')
    .replaceAll('_', '-')
    return `/items/${slug}`
})
</script>
<style scoped>
.item-slot {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #8b8b8b;
    border: 3px solid #373737;
    box-shadow: border-box;
}
.item-slot:hover {
    background: #a0a0a0;
}
.item-slot img {
    width: 48px;
    height: 48px;
    image-rendering: pixelated;
}
.empty {
    cursor: default;
}
.count {
    position: absolute;
    right: 3px;
    bottom: 0;
    color:white;
    font-size: 18px;
    font-weight: bold;
    text-shadow: 2px 2px #000 
}
</style>    