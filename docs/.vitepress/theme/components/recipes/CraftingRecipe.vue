<template>
  <div class="recipe crafting-recipe">
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
</template>
<script setup lang="ts">
import {items} from '../../../../data/items.ts'
import ItemSlot from '../ItemSlot.vue'
interface Recipe {
  id: string
  type: string
  pattern: (string | null)[][]
  result: {
    item: string
    count: number
  }
}
const props = defineProps<{
  recipe: Recipe
}>()
function getItem(id: string | null) {
  if (!id) {
    return undefined
  }
  return items[id]
}
const flatPattern =
  props.recipe.pattern.flat()
</script>
<style scoped>
.recipe {
  display: flex;
  align-items: center;
  gap: 24px;
  width: fit-content;
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
.crafting-grid {
  display: grid;
  grid-template-columns:
    repeat(3, 64px);
  gap: 3px;
}
.arrow {
  font-size: 40px;
  color: var(--vp-c-text-1);
}
</style>