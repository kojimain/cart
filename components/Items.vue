<template>
  <div class="box content">
    <Item
      v-for="item in items"
      :key="item.id"
      :item="item"/>
  </div>
</template>

<script>
import Item from './Item'

export default {
  components: {
    Item
  },
  props: {
    items: {
      type: Array[Object],
      default() {}
    }
  }
}
</script>
