<template>
  <div/>
</template>

<script>
export default {
  mounted() {
    // clear
    this.$store.commit('cart/clearItems')
    // add
    this.$store.commit('cart/addItem', { name: 'item1' })
    this.$store.commit('cart/addItem', { name: 'item2' })
    this.$store.commit('cart/addItem', { name: 'item3' })
  }
}
</script>
