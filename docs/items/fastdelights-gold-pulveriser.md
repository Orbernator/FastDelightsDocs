<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:gold_pulveriser'][0]
</script>
# Gold Pulveriser

Behold! The blingiest of them all!
<br>

## Recipe
<Recipe :recipe="recipe" />