<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:chipholder'][0]
</script>
# Chipholder
Holds chips and other goodies!
<br>

## Recipe
<Recipe :recipe="recipe" />