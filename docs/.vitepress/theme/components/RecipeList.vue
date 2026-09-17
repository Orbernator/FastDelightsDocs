<script setup lang="ts">
import recipes from '../../../data/recipes/recipes.json'
import Recipe from './Recipe.vue'
const props = defineProps<{
    item: string
}>()
const itemRecipes = recipes[props.item] ?? []
</script>
<template>
    <div v-if="itemRecipes.length" class="recipe-list">
        <Recipe
            v-for="recipe in itemRecipes"
            :key="recipe.id"
            :recipe="recipe"
        />
    </div>
    <p v-else class="no-recipes">
        No recipes available for this item.
    </p>
</template>
<style scoped>
.recipe-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.no-recipes {
    color: var(--vp-c-text-2)
}
</style>