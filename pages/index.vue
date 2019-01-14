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
        },
        {
          id: 4,
          name: 'item4',
          description: 'item4item4item4item4item4',
          imageUrl: '/items/sample/item4.png'
        },
        {
          id: 5,
          name: 'item5',
          description: 'item5item5item5item5item5',
          imageUrl: '/items/sample/item5.png'
        },
        {
          id: 6,
          name: 'item6',
          description: 'item6item6item6item6item6',
          imageUrl: '/items/sample/item6.png'
        }
      ]
    }
  }
}
</script>
