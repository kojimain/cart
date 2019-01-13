<template>
  <div class="section">
    <Items
      :items="items"/>
  </div>
</template>

<script>
import Items from '~/components/Items'

export default {
  components: {
    Items
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'item1',
          description: 'item1item1item1item1item1',
          imageUrl: '/items/sample/item1.png'
        },
        {
          id: 2,
          name: 'item2',
          description: 'item2item2item2item2item2',
          imageUrl: '/items/sample/item2.png'
        },
        {
          id: 3,
          name: 'item3',
          description: 'item3item3item3item3item3',
          imageUrl: '/items/sample/item3.png'
        }
      ]
    }
  }
}
</script>
