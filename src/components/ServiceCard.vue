<template lang="pug">
  .service-card(:class='{"highlight": highlight}')
    .service-card--header
      img.header-image--overlay(src='../assets/images/oc-logo.svg')
      div
        slot(name='image')
          g-image.header-image(src='~/assets/images/garage-floor.png')
    .service-card--body
      h5
        slot(name='header') Commercial Service
      p
        slot(name='body').
          O'Neill Concrete Inc. is a full service concrete company that has proudly served the Tri-Conuty area with forty five years experience. Our trained professionals focus on customer service and quality work. We accomplish this by providing superior service, quality products and competitive pricing. O'Neill Concrete Inc works with residential, commercial and industrial customers where our experience is the difference on all of our projects.
      .service-card--action
        a(href='') learn more →
</template>

<script>
export default {
  props: {
    highlight: { type: Boolean, default: false }
  }
};
</script>

<style lang="stylus" scoped>
.service-card
  background var(--white)
  box-shadow var(--gray-shadow)
  display flex
  flex-direction column
  max-width 440px
  transform scale(0.95)
  transition all 0.3s
  &--header
    border-bottom 4px solid var(--primary)
    position relative
    .header-image
      height 280px
      width 100%
      &--overlay
        bottom 16px
        height 48px
        opacity 0.5
        position absolute
        right 16px
        transition all 0.4s
        width auto
  &.highlight
    box-shadow var(--gray-shadow--hover)
    transform scale(1)
  &:hover
    box-shadow var(--gray-shadow--hover)
    transform scale(1)
    .header-image--overlay
      animation-duration 1.5s
      animation-fill-mode forwards
      animation-name spin
      animation-timing-function ease-in-out
  &--body
    padding 40px 40px 24px
    p
      display -webkit-box
      margin 24px 0 32px 0
      overflow hidden
      -webkit-box-orient vertical
      -webkit-line-clamp 3
    .service-card--action
      text-align right
      a
        border-bottom 2px solid transparent
        transition all 0.15s ease
        &:hover
          border-bottom-color var(--primary)
          color var(--primary)
          font-weight bold
          text-decoration none
@keyframes spin
  from
    transform rotate(0deg)
  to
    transform rotate(360deg)
</style>
