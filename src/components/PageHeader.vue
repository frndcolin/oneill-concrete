<template lang='pug'>
  header.header
    nav.navbar
      .navbar-logo(href='#') {{ $static.metadata.siteName }}
      .navbar-button
        span.navbar-button--bar(v-for="n in 3")
      .navbar-list
        a.navbar-item(href="#services") Services
        a.navbar-item(href="#gallery") Gallery
        a.navbar-item(href="#contact") Contact
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="stylus">
.header
  align-items center
  background #efefef
  display flex
  font-family var(--primary-font)
  justify-content center
  letter-spacing 0.075em
  text-transform uppercase
.navbar
  display flex
  height 80px
  justify-content space-between
  padding-top 1rem
  width 80%
  &-logo
    background-image url('../assets/images/Text-Mask.jpg')
    background-position top
    background-size cover
    color rgba(255, 255, 255, 0.15)
    font-size 32px
    letter-spacing 0.075em
    -webkit-background-clip text
  &-list
    align-items center
    display flex
  &-item
    color var(--gray-3)
    cursor pointer
    margin-left 40px
    overflow visible
    padding 8px 16px 6px 16px
    position relative
    transition all 0.4s
    &::before
      background transparent
      border-bottom 4px solid var(--gray-4)
      content ''
      height 100%
      left 0
      position absolute
      top 0
      transition 0.4s
      width 0
    &:hover
      color var(--gray-4)
      text-decoration none
      &::before
        width 100%
  &-button
    align-items space-around
    display flex
    display none
    flex-direction column
    justify-content center
    &--bar
      background #333
      content ''
      display block
      height 4px
      margin 2px 0
      width 40px
</style>
