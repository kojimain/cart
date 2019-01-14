<template>
  <nav class="navbar is-info is-fixed-top">
    <div class="navbar-brand">
      <router-link
        :to="{ name: 'index' }"
        class="navbar-item">
        <span class="icon">
          <i class="fa fa-home"/>
        </span>
      </router-link>
      <router-link
        :to="{ name: 'cart' }"
        class="navbar-item">
        <span class="icon">
          <i class="fas fa-shopping-cart"/>
        </span>
        <span>
          ( {{ cartItemsCount }} )
        </span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    cartItemsCount() {
      return this.$store.state.cart.items.length
    }
  }
}
</script>

<style>
body {
  padding-top: 52px;
}
</style>
