<template>
    <div
        v-if="recipe"
        class="recipe"
    >
        <div class="crafting-grid">
            <ItemSlot
                v-for="(itemId, index) in flatPattern"
                :key="index"
                :item="getItem(itemId)"
            />
        </div>
        <div class="arrow">
            ->
        </div>
        <ItemSlot
        :item="getItem(recipe.result.item)"
        :count="recipe.result.count"
        />    
    </div>
    <div v-else>
        Recipe not found.
    </div>
</template>
<script setup lang="ts">

import minecraftItems from '../../../data/items/minecraft.json'
import fastdelightsItems from '../../../data/items/fastdelights.json'
import farmersdelightItems from '../../../data/items/farmersdelight.json'
import brewinandchewinItems from '../../../data/items/brewinandchewin.json'
import recipes from '../../../data/recipes/recipes.json'
import ItemSlot from './ItemSlot.vue'
const props = defineProps<{
    id: string
}>()
const items: Record<string, (typeof minecraftItems)[keyof typeof minecraftItems]> = {
    ...minecraftItems,
    ...fastdelightsItems,
    ...farmersdelightItems,
    ...brewinandchewinItems
}
const recipe = (recipes as Record<string, typeof recipes[keyof typeof recipes]>)[props.id]
const flatPattern = recipe
    ? recipe.pattern.flat()
    : []
function getItem(id: string | null) {
    if (!id) return undefined
    return items[id]
}
</script>
<style scoped>
.recipe {
    display: flex;
    align-items: center;
    gap: 24px;
    width: fit-content;
    padding: 20px;
    background: #222;
    border: 2px solid #444;
}
.crafting-grid {
    display: grid;
    grid-template-columns: repeat(3, 64px);
    gap: 3px;
}
.arrow {
    color: white;
    font-size: 40px;
}
</style>