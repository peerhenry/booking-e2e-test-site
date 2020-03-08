<template lang="pug">
.deals
  .deal-card(v-for="deal in deals")
    h3 {{ deal.name }}
    p € {{ deal.pricePerPerson }} pp
    button(@click="goto(deal)") Book now
</template>

<script>
export default {
  props: {
    deals: Array,
  },
  methods: {
    goto(deal) {
      this.$router.push(`/book/${deal.id}`)
    },
  },
}
</script>

<style scoped lang="stylus">
.deals
  -ms-display grid
  display grid
  grid-template-columns repeat(3, 1fr)
  -ms-grid-template-columns repeat(3, 1fr)
  grid-gap 10px

.deal-card
  border 1px solid grey
  border-radius 5px
  padding 15px
</style>
