<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:chips_with_tomato_sauce'][0]
</script>
# Bun

The Bun, so many things are coming soon!
<br>

## Recipe
<Recipe :recipe="recipe" /> 
