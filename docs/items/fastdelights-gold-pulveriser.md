<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:gold_pulveriser'][0]
</script>
# Gold Pulverizer

<br>

## Recipe
<Recipe :recipe="recipe" />