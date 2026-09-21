<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:onion_rings'][0]
</script>
# Onion Rings

Fried Onion, what a delight!
<br>

## Recipe
<Recipe :recipe="recipe" /> 