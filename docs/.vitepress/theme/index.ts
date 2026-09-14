import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ItemCard from './components/ItemCard.vue'
import ItemSlot from './components/ItemSlot.vue'
import ItemGrid from './components/ItemGrid.vue'
import Recipe from './components/Recipe.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({app}) {
        app.component('ItemCard', ItemCard)
        app.component('ItemSlot', ItemSlot)
        app.component('ItemGrid', ItemGrid)
        app.component('Recipe', Recipe)
    }
} satisfies Theme