<template>
  <CraftingRecipe
    v-if="recipe.type === 'crafting'"
    :recipe="recipe"
  />

  <SmeltingRecipe
    v-else-if="
      recipe.type === 'smelting' ||
      recipe.type === 'blasting' ||
      recipe.type === 'smoking'
    "
    :recipe="recipe"
  />

  <CuttingRecipe
    v-else-if="recipe.type === 'cutting'"
    :recipe="recipe"
  />

  <CookingRecipe
    v-else-if="recipe.type === 'cooking'"
    :recipe="recipe"
  />

  <div
    v-else
    class="unknown-recipe"
  >
    Unknown recipe type:
    <code>{{ recipe.type }}</code>
  </div>
</template>

<script setup lang="ts">

import CraftingRecipe from './recipes/CraftingRecipe.vue'
import SmeltingRecipe from './recipes/SmeltingRecipe.vue'
import CuttingRecipe from './recipes/CuttingRecipe.vue'
import CookingRecipe from './recipes/CookingRecipe.vue'

interface Recipe {
  id: string
  type: string

  pattern?: (string | null)[][]

  input?: string

  result: {
    item: string
    count: number
  }

  experience?: number

  cookingTime?: number
}

defineProps<{
  recipe: Recipe
}>()

</script>

<style scoped>

.unknown-recipe {
  padding: 15px;

  background: var(--vp-c-bg-soft);

  border: 1px solid var(--vp-c-divider);

  border-radius: 8px;
}

</style>