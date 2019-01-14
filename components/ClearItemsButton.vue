<template>
  <div>
    <button
      class="button"
      @click="clearItems">
      カートの中身を空にする
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    clearItems() {
      this.$store.commit('cart/clearItems')
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
