# Items

All of the items in the mod!

<script setup>

import fastdelightsItems from '../data/items/fastdelights.json'
const items = [
    ...Object.values(fastdelightsItems)
]
</script>

<ItemGrid :items="items" />