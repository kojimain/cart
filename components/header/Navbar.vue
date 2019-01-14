<template>
  <nav class="navbar is-info">
    <div class="navbar-brand">
      <router-link
        :to="{ name: 'index' }"
        class="navbar-item">
        <span class="icon">
          <i class="fa fa-home"/>
        </span>
      </router-link>
    </div>
    <div class="navbar-menu is-active">
      <div class="navbar-end">
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
