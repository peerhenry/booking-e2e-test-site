<template lang="pug">
.deal-details
  .header
    h2 {{ deal.name }}
  .body
    p € {{ deal.pricePerPerson }} pp
    p
      label(for="people")
        span Number of people:
        input(name="people" type="number" v-model="nrOfPeople" min="0")
    p
      label.agree(for="agree")
        input(type="checkbox" id="agree" v-model="agree")
        span I agree to terms and conditions
  .footer
    router-link(to="/") Cancel
    button(@click="confirm" :disabled="!canBook") Book this
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
      agree: false,
    }
  },
  computed: {
    canBook() {
      return this.nrOfPeople > 0 && this.agree
    },
  },
  methods: {
    confirm() {
      if (this.canBook) this.$router.push('/confirmation')
    },
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

.agree
  cursor pointer

  &:hover
    color #888

.footer
  display inline-grid
  grid-template-columns 1fr 1fr
  grid-gap 20px
</style>
