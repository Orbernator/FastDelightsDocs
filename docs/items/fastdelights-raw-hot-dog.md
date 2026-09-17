<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:raw_hot_dog'][0]
</script>
# Raw Hot Dog

Before the Hot Dog is created, there came the RAW HOT DOG *dun dun duuuun*
<br>

## Recipe
<Recipe :recipe="recipe" />