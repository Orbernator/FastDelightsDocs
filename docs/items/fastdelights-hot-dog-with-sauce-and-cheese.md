<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:hot_dog_with_sauce_and_cheese'][0]
</script>
# Hot Dog with Sauce and Cheese

It's a Hot Dog! But with Sauce, and Cheese!
<br>

## Recipe
<Recipe :recipe="recipe" />