<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:oil_bucket'][0]
</script>
# Oil Bucket

Oil, very essential in making unhealty foods!
<br>

## Recipe
<Recipe :recipe="recipe" />