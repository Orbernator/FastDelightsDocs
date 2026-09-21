<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:hot_dog_with_sauce'][0]
</script>
# Hot Dog with Sauce

It's a Hot Dog, with Sauce!
<br>

## Recipe
<Recipe :recipe="recipe" /> 