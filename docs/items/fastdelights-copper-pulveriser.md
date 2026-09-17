<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:copper_pulveriser'][0]
</script>
# Copper Pulverizer
Bronzed and Poundin!
<br>

## Recipe
<Recipe :recipe="recipe" />