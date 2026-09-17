<template>
    <div class="recipe cutting-recipe">
        <ItemSlot
            :item="getItem(recipe.input)"
        />
        <div class="arrow">
            ->
        </div>
        <div class="cutting-board">
            <div class="board">
                <div class="board-handle"></div>
                <itemSlot
                    :item="getItem(recipe.input)"
                />
                <div class="knife">
                    <itemSlot
                        :item="toolItem"
                    />
                </div>
            </div>
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
import {computed} from 'vue'
import {items} from '../../../../data/items'
import ItemSlot from '../ItemSlot.vue'

interface Tool {
    type: 'item' | 'tag'
    item?: string
    tag?: string
}
interface Recipe {
    id: string
    type: 'cutting'
    input: string
    tool: Tool
    result: {
        item: string
        count: number
    }
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
const toolItem = computed(() => {
    if (props.recipe.tool.type === 'item') {
        return getItem(props.recipe.tool.item)
    }
    return undefined
})
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
.arrow {
    font-size: 40px;
    color: var(--vp-c-text-1);
}
.cutting-board {
    display: flex;
    align-items: center;
    justify-content: center;
}
.board {
    position: relative;
    width: 90px;
    height: 65px;
    align-items: center;
    justify-content: center;
    background: #9b6b3d;
    border: 4px solid #543820;
    border-radius: 6px;
}
.board-handle {
    position: absolute;
    right: -18px;
    width: 18px;
    height: 25px;
    background: #9b6b3d;
    border: 4px solid #543820;
    border-left: none;
    border-radius: 0 5px 5px 0;
}
.knife {
    position: absolute;
    right: -35px;
    top: -25px;
    transform: rotate(-35deg);
}
</style>