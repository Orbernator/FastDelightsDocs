<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:chips'][0]
</script>
# Chips

The Crunchiest chips you have ever seen!
<br>

## Recipes
<Recipe :recipe="recipe" /> 