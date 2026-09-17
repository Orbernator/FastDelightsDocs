<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:netherite_pulveriser'][0]
</script>
# Netherite Pulverizer

<br>

## Recipe
<Recipe :recipe="recipe" />