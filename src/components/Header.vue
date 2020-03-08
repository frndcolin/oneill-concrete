<template lang='pug'>
  header.header
    nav.navbar
      .navbar-logo(href='#') {{ $static.metadata.siteName }}
      .navbar-button
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
  margin-bottom 20px
  text-transform uppercase
.navbar
  display flex
  height 80px
  justify-content space-between
  padding-top 1rem
  width 80%
  &-logo
    font-size 24px
  &-list
    align-items center
    display flex
  &-item
    border-bottom 2px solid transparent
    color #6f6f6f
    margin-left 40px
    padding 4px 8px 0 8px
    transition all 0.3s
    &:hover
      border-bottom-color #333333
      color #333333
      text-decoration none
.nav--link
  margin-left 20px
  @media (max-width: 419px)
    margin 0
    padding 15px 10px 10px 0
</style>
