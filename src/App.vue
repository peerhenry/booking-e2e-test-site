<template lang="pug">
#app
  router-view
</template>

<style lang="stylus">
html, body, #app
  height 100%
  padding 0
  margin 0

#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

button, a
  text-decoration none
  background-color white
  color black
  cursor pointer
  border 1px solid black
  padding 10px

  &:hover
    background-color #eee

h1, h2, h3, h4, h5
  margin 0
</style>
