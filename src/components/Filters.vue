<template lang="pug">
.filters
  h4 Filters
  .pricerange
    label Price per person
    label.ranger
      span min
      input(type="range" min="0" max="100" v-model="minPrice")
      span {{ minPrice }}
    label.ranger
      span max
      input(type="range" min="0" max="100" v-model="maxPrice")
      span {{ maxPrice }}
</template>

<script>
export default {
  props: {
    value: Object,
  },
  data() {
    return {
      minPrice: 0,
      maxPrice: 100,
    }
  },
  computed: {
    filter() {
      return {
        minPrice: parseInt(this.minPrice),
        maxPrice: parseInt(this.maxPrice),
      }
    },
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.minPrice = newVal.minPrice
        this.maxPrice = newVal.maxPrice
      }
    },
    filter(newVal) {
      // console.log('emit', newVal)
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
