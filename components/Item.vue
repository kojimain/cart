<template>
  <article class="post">
    <h4>{{ item.name }}</h4>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img :src="item.imageUrl">
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p v-html="item.description"/>
        </div>
      </div>
      <div class="media-right">
        <button
          :disabled="isAdded"
          class="button"
          @click="addToCart">
          <span class="icon">
            <i class="fas fa-cart-plus"/>
          </span>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {}
    }
  },
  computed: {
    isAdded() {
      return this.$store.state.cart.items.some(item => {
        return item.id === this.item.id
      })
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('cart/addItem', this.item)
    }
  }
}
</script>

<style scoped>
.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eeeeee;
}
</style>
