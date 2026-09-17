<script setup>
import Recipe from '../.vitepress/theme/components/Recipe.vue'
import recipes from '../data/recipes/recipes.json'

const recipe = recipes['fastdelights:chicken_n_cheeseburger'][0]
</script>
# Chicken N Cheeseburger

*MMMMMM* Cheeseburger, Chicken *MMMMMMMM* I'm hungry, is anyone else hungry?
<br>

## Recipe
<Recipe :recipe="recipe" />