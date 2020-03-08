import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const deals = [
  {
    id: 1,
    name: 'bowling 1',
    pricePerPerson: 15,
  },
  {
    id: 2,
    name: 'bowling 2',
    pricePerPerson: 20,
  },
]

export default new Vuex.Store({
  state: {
    deals,
  },
  getters: {
    filteredDeals: state => filter => {
      if (!filter) return state.deals
      return state.deals.filter(
        d => d >= filter.minPrice && d <= filter.maxPrice
      )
    },
    getDealById: state => id => state.deals.find(d => d.id == id),
  },
  mutations: {},
  actions: {},
  modules: {},
})
