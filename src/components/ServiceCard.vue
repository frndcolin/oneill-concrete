<template lang="pug">
  .service-card
    .service-card--header
      img.header-image--overlay(src='../assets/images/oc-logo.svg')
      g-image.header-image(src='~/assets/images/garage-floor.png')
    .service-card--body
      h4 Commercial Service
      p.
        O'Neill Concrete Inc. is a full service concrete company that has proudly served the Tri-Conuty area with forty five years experience. Our trained professionals focus on customer service and quality work. We accomplish this by providing superior service, quality products and competitive pricing. O'Neill Concrete Inc works with residential, commercial and industrial customers where our experience is the difference on all of our projects.
      .service-card--action
        a(href='') learn more →
</template>

<style lang="stylus" scoped>
.service-card
  background var(--white)
  box-shadow var(--gray-shadow)
  display flex
  flex-direction column
  width 100%
  &--header
    position relative
    .header-image
      height auto
      width 100%
      &--overlay
        bottom 16px
        height 48px
        opacity 0.5
        position absolute
        right 16px
        transition all 0.4s
        width auto
  &--body
    padding 32px 24px 40px 24px
    p
      display -webkit-box
      margin 24px 0 32px 0
      overflow hidden
      -webkit-box-orient vertical
      -webkit-line-clamp 5
    .service-card--action
      text-align right
</style>
