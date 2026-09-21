<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:sliced_onion'][0]
</script>
# Sliced Onion

The Onion has also been Sliced!
<br>

## Recipe
<Recipe :recipe="recipe" /> 