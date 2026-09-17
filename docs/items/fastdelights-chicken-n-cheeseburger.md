<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:chicken_n_cheeseburger'][0]
</script>
# Chicken N Cheeseburger

Cheesy and Chickeny at the same time!
<br>

## Recipe
<Recipe :recipe="recipe" />