<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:diamond_pulveriser'][0]
</script>
# Diamond Pulverizer
Made from the shinest of the hard stones!
<br>

## Recipe
<Recipe :recipe="recipe" />