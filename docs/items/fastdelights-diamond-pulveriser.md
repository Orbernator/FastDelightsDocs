<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:diamond_pulveriser'][0]
</script>
# Diamond Pulverizer

Testing
<br>

## Recipe
<Recipe :recipe="recipe" />