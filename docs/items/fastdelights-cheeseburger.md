<script setup>
    import Recipe from "../.vitepress/theme/components/Recipe.vue"
    import recipe from "../data/recipes/recipes.json"
</script>

# Cheeseburger

Cheese on burger.
<br>

## Recipe
<Recipe :recipe="recipes['fastdelights:cheeseburger'][0]"/>