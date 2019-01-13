<template>
  <div class="section">
    <div class="content">
      <CartScreen
        :items="items"/>
    </div>
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
