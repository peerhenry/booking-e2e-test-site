import Vue from 'vue'
import Vuex from 'vuex'
import deals from './deals.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deals,
  },
  getters: {
    filteredDeals: state => filter => {
      if (!filter) return state.deals
      return state.deals.filter(
        d =>
          d.pricePerPerson >= filter.minPrice &&
          d.pricePerPerson <= filter.maxPrice
      )
    },
    getDealById: state => id => state.deals.find(d => d.id == id),
  },
  mutations: {},
  actions: {},
  modules: {},
})
