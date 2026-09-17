<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:cheeseburger'][0]
</script>

# Cheeseburger

Cheese on burger.
<br>

## Recipe
<Recipe :recipe="recipe" />