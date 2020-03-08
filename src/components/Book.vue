<template lang="pug">
.deal-details
  .header
    h2 {{ deal.name }}
  .body
    p € {{ deal.pricePerPerson }} pp
    p
      label(for="people")
        span Number of people:
        input(name="people" type="number" v-model="nrOfPeople")
  .footer
    router-link(to="/confirmation") Book this
</template>

<script>
export default {
  props: {
    dealId: String,
  },
  data() {
    return {
      deal: Object,
      nrOfPeople: 0,
    }
  },
  mounted() {
    this.deal = this.$store.getters.getDealById(this.dealId)
  },
}
</script>

<style scoped lang="stylus">
.header
  padding 30px

.body
  margin-bottom 50px

input
  padding 10px
  width 30px
  max-width 30px
  text-align center
  margin-left 20px
</style>
