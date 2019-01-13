<template>
  <div>
    <CartScreen
      :items="items"/>
  </div>
</template>

<script>
import CartScreen from '~/components/CartScreen'

export default {
  components: {
    CartScreen
  },
  data() {
    return {
      items: this.$store.state.cart.items
    }
  }
}
</script>
