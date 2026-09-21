<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:frickles'][0]
</script>
# Frickles

The Pickle has been fried! Yummy!
<br>

## Recipe
<Recipe :recipe="recipe" /> 