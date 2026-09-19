<script setup lang="ts">
import { items } from '../../../../data/items'
import ItemSlot from '../ItemSlot.vue'

interface Recipe {
  id: string
  type: 'cooking'
  ingredients: string[]
  result: {
    item: string
    count: number
  }
  container?: string
  experience?: number
  cookingTime?: number
}
const props = defineProps<{
  recipe: Recipe
}>()
function getItem(id: string | undefined) {
  if (!id) {
    return undefined
  }
  return items[id]
}
const cookingSeconds = props.recipe.cookingTime
  ? props.recipe.cookingTime / 20
  : 0
</script>
<template>
  <div class="recipe cooking-recipe">
    <div class="ingredients">
      <ItemSlot
        v-for="(ingredient, index) in recipe.ingredients"
        :key="index"
        :item="getItem(ingredient)"
      />
    </div>
    <div class="pot">
      <div class="pot-icon">
        \_/
      </div>
    </div>
    <div class="arrow">
      ->
    </div>
    <ItemSlot
      :item="getItem(recipe.result.item)"
      :count="recipe.result.count"
    />
    <div class="recipe-info">
      <div v-if="recipe.cookingTime">
        {{ cookingSeconds }}s
      </div>
      <div v-if="recipe.experience">
        {{ recipe.experience }} XP
      </div>
      <div v-if="recipe.container">
        Returns:
        {{ getItem(recipe.container)?.name }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.recipe {
  display: flex;
  align-items: center;
  gap: 18px;
  width: fit-content;
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
.ingredients {
  display: grid;
  grid-template-columns:
    repeat(3, 64px);
  gap: 4px;
  max-width: 200px;
}
.pot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  font-size: 42px;
  background: var(--vp-c-bg-mute);
  border: 3px solid var(--vp-c-divider);
  border-radius: 8px;
}
.arrow {
  font-size: 40px;
  color: var(--vp-c-text-1);
}
.recipe-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 8px;
  color: var(--vp-c-text-2);
  font-size: 14px;
}
</style>