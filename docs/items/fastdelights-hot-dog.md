<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:hot_dog_with_sauce'][0]
</script>
# Hot Dog

You combined the Cooked Hot Dog, with the bun, aaaannnd! Hot Dog Deliciousness!
<br>

## Recipes
<Recipe :recipe="recipe" /> 