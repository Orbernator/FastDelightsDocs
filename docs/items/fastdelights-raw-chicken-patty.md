<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:chips_with_tomato_sauce'][0]
</script>
# Raw Chicken Patty

Once cooked, this will be quite yummy! But I wouldnt eat it right now.
<br>

## Recipe
<Recipe :recipe="recipe" />