<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:iron_pulveriser'][0]
</script>
# Iron Pulverizer

<br>

## Recipe
<Recipe :recipe="recipe" />