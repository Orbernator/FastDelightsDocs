<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:bacon_cheeseburger'][0]
</script>
# Bacon Cheeseburger

Bacon on the Cheeseburger
<br>

## Recipe
<Recipe :recipe="recipe" />