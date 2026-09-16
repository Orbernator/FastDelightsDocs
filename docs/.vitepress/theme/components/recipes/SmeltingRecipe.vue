<template>
  <div class="recipe smelting-recipe">
    <div class="input">
      <ItemSlot
        :item="getItem(recipe.input)"
      />
    </div>
    <div class="furnace">
      <div class="furnace-icon">
        <div class="flame">
          🔥
        </div>
        <div class="progress">
          ->
        </div>
      </div>
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
    </div>
  </div>
</template>
<script setup lang="ts">
import {items} from '../../../../data/items.ts'
import ItemSlot from '../ItemSlot.vue'
interface Recipe {
  id: string
  type:
    | 'smelting'
    | 'blasting'
    | 'smoking'
  input: string
  result: {
    item: string
    count: number
  }
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
const cookingSeconds =
  props.recipe.cookingTime
    ? props.recipe.cookingTime / 20
    : 0
</script>
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
.furnace {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.furnace-icon {
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #555;
  border: 3px solid #333;
}
.flame {
  font-size: 22px;
  line-height: 1;
}
.progress {
  font-size: 18px;
  color: white;
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