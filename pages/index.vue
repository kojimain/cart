<template>
  <div class="container">
    <router-link
      :to="{ name: 'cart' }">
      カートへ
    </router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    // clear
    this.$store.commit('cart/clearItems')
    // add
    this.$store.commit('cart/addItem', {
      name: 'item1',
      width: 20,
      height: 10
    })
    this.$store.commit('cart/addItem', {
      name: 'item2',
      width: 40,
      height: 30
    })
    this.$store.commit('cart/addItem', {
      name: 'item3',
      width: 30,
      height: 20
    })
  }
}
</script>
