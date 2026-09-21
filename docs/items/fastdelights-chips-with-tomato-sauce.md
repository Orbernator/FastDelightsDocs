<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:chips_with_tomato_sauce'][0]
</script>
# Chips with Tomato Sauce

Those crunchy Chips, now with Sauce!
<br>

## Recipe
<Recipe :recipe="recipe" /> 
