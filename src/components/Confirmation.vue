<template lang="pug">
.confirmation
  .block
    h1 Thank you for booking at Pietje Precies!
    router-link(to="/") Back to overview
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.confirmation
  height 100%
  display flex
  justify-content center
  align-items center

.block
  display block
  transform translateY(-150px)

  h1
    display block
    margin-bottom 40px

  a
    display inline-block
</style>
