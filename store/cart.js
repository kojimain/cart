export const state = () => ({
  items: []
})

export const mutations = {
  clearItems(state) {
    state.items = []
  },
  addItem(state, item) {
    state.items.push(item)
  }
}
