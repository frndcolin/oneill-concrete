<template lang='pug'>
  header.header(:class="{'bg-dark': dark}")
    nav.navbar
      .navbar-logo(href='#') {{ $static.metadata.siteName }}
      .navbar-button
        span.navbar-button--bar(v-for="n in 3")
      .navbar-list
        nav-link(link='#services' text='Services')
        nav-link(link='#gallery' text='Gallery')
        nav-link(link='/contact' text='Contact')
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavLink from "../components/NavLink";

export default {
  components: { NavLink },
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="stylus">
.header
  align-items center
  font-family var(--secondary-font)
  letter-spacing 0.075em
  position absolute
  text-transform uppercase
  top 0
  width 100%
  z-index 1
.navbar
  display flex
  height 72px
  justify-content space-between
  margin 0 auto
  padding-top 1rem
  width 80%
  &-logo
    color var(--gray-2)
    font-family var(--primary-font)
    font-size 24px
    letter-spacing 0.148em
    position relative
  &-list
    align-items center
    display flex
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
