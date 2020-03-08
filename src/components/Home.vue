<template lang="pug">
.home
  .header
    h1 Pietje Precies
  .body
    Filters(v-model="filter")
    DealsOverview(:deals="deals")
</template>

<script>
import Filters from '@/components/Filters.vue'
import DealsOverview from '@/components/DealsOverview.vue'

export default {
  components: { Filters, DealsOverview },
  data() {
    return {
      filter: null,
    }
  },
  computed: {
    deals() {
      return this.$store.getters.filteredDeals(this.filter)
    },
  },
}
</script>

<style scoped lang="stylus">
.header
  padding 35px

  h1
    margin 0

.body
  display grid
  grid-gap 20px
  grid-template-columns 1fr 3fr
</style>
