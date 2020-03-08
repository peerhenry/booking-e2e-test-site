<template lang="pug">
.filters
  h4 Filters
  .pricerange
    label Price per person
    label.ranger
      span min
      input(type="range" min="0" max="100" v-model="filter.minPrice")
      span {{ filter.minPrice }}
    label.ranger
      span max
      input(type="range" min="0" max="100" v-model="filter.maxPrice")
      span {{ filter.maxPrice }}
</template>

<script>
export default {
  props: {
    value: Object,
  },
  data() {
    return {
      filter: {
        minPrice: 0,
        maxPrice: 100,
      },
    }
  },
  watch: {
    value(newVal) {
      this.filter = newVal
    },
    filter(newVal) {
      console.log('emit', newVal)
      this.$emit('input', newVal)
    },
  },
}
</script>

<style scoped lang="stylus">
.pricerange label
  display block

label.ranger
  display grid
  grid-template-columns repeat(3, 1fr)
</style>
