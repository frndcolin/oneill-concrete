<template lang="pug">
  b-row.service
    b-col.p-0(xs='12' md='6' :class='[flip ? "content-right" : "content-left"]' :order='flip ? 2 : null')
      .service-image
        slot(name='image')
          img.service-image--overlay(src='../assets/images/oc-logo.svg')
          g-image(src='~/assets/images/garage-floor.png' width='480')
    b-col.content-center(xs='12' md='6')
      .service-content
        slot(name='content')
          h2 Custom Services
          p.
            O'Neill Concrete Inc. is a full service concrete company that has proudly served the Tri-Conuty area with forty five years experience. Our trained professionals focus on customer service and quality work. We accomplish this by providing superior service, quality products and competitive pricing. O'Neill Concrete Inc works with residential, commercial and industrial customers where our experience is the difference on all of our projects.
</template>

<script>
export default {
  props: {
    flip: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    targetClass() {
      return `${this.$attrs.id}--target`;
    },
    animatorTarget() {
      return `.${this.$attrs.id}--target`;
    }
  }
};
</script>

<style lang="stylus">
#services
  background var(--gray-1)
.service
  padding 80px 0
  &-image
    box-shadow var(--gray-shadow)
    position relative
    transition all 0.3s
    z-index 1
    &::before
      background linear-gradient(to bottom right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))
      content ''
      height 100%
      left 0
      position absolute
      top 0
      transition all 0.3s ease
      width 100%
    &::after
      background var(--primary-dn1)
      bottom -8px
      content ''
      height 100%
      left 8px
      position absolute
      transition all 0.3s ease
      width 100%
      z-index -1
    &:hover
      box-shadow var(--gray-shadow--hover)
      transform scale(1.05)
      &::before
        opacity 0.1
      &::after
        opacity 0
        transform translate(-8px, -8px)
    &--overlay
      bottom 16px
      height 56px
      opacity 0.5
      position absolute
      right 16px
      transition all 0.4s
      width auto
    &:hover .service-image--overlay
      animation-duration 1.5s
      animation-fill-mode forwards
      animation-name spin
      animation-timing-function ease-in-out
  &-content
    h2
      text-transform capitalize
@keyframes spin
  from
    transform rotate(0deg)
  to
    transform rotate(360deg)
</style>
