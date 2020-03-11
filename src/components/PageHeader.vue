<template lang='pug'>
  header.header
    nav.navbar
      .navbar-logo(href='#') {{ $static.metadata.siteName }}
      .navbar-button
        span.navbar-button--bar(v-for="n in 3")
      .navbar-list
        a.navbar-item(href="#Services") Services
        a.navbar-item(href="#Gallery") Gallery
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
    border-bottom 2px solid transparent
    color var(--gray-3)
    margin-left 40px
    padding 4px 8px 0 8px
    transition all 0.3s
    &:hover
      border-bottom-color var(--black)
      color var(--black)
      text-decoration none
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
.nav--link
  margin-left 20px
  @media (max-width: 419px)
    margin 0
    padding 15px 10px 10px 0
</style>
