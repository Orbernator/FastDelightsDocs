<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:raw_hot_dog'][0]
</script>
# Raw Hot Dog

Hot Dog, but raw
<br>

## Recipe
<Recipe :recipe="recipe" />