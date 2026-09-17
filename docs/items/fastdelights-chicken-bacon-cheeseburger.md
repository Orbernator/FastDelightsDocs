<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:chicken_bacon_cheeseburger'][0]
</script>
# Chicken Bacon Cheeseburger

Just like the first one, but with bacon!
<br>

## Recipe
<Recipe :recipe="recipe" />