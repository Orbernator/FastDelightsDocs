<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:netherite_pulveriser'][0]
</script>
# Netherite Pulverizer

Show that you value your smashing with the most expensive pulveriser in the game!
<br>

## Recipe
<Recipe :recipe="recipe" />