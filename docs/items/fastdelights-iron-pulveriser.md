<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:iron_pulveriser'][0]
</script>
# Iron Pulverizer
Iron, the strongest of the silver metals!
<br>

## Recipe
<Recipe :recipe="recipe" />