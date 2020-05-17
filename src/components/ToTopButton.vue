<template lang="pug">
  #scroll-to-top(@click='scrollToTop')
    .scroll-icon
      .scroll-icon--arrow
      .scroll-icon--arrow
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.$router.push("/");
    }
  }
};
</script>

<style lang="stylus" scoped>
#scroll-to-top
  bottom 32px
  cursor pointer
  display inline-block
  display flex
  height 72px
  justify-content center
  position fixed
  right 48px
  transition all 0.3s
  width 72px
  z-index 9999
  .scroll-icon
    background var(--white)
    border 4px solid var(--primary-up2)
    border-radius 50%
    box-shadow var(--gray-shadow)
    content ''
    height 48px
    position relative
    transition all 0.3s
    width 48px
    &--arrow
      border-left 4px solid rgba(0, 100, 255, 0.035)
      border-top 4px solid rgba(0, 100, 255, 0.035)
      bottom 8px
      content ''
      height 12px
      left 45%
      margin -4px auto
      position absolute
      transform rotate(45deg) translateX(-50%)
      width 12px
  &:hover
    .scroll-icon
      transform scale(1.05)
    .scroll-icon .scroll-icon--arrow
      animation-duration 1.5s
      animation-fill-mode forwards
      animation-iteration-count infinite
      animation-name arrow-up
      animation-timing-function linear
      &:nth-of-type(2)
        animation-delay 0.75s
@keyframes arrow-up
  0%
    border-left-color rgba(0, 100, 255, 0.025)
    border-left-width 2px
    border-top-color rgba(0, 100, 255, 0.025)
    border-top-width 2px
    bottom 4px
  50%
    border-left-color rgba(0, 100, 255, 0.2)
    border-left-width 4px
    border-top-color rgba(0, 100, 255, 0.2)
    border-top-width 4px
    bottom 12px
  100%
    border-left-color rgba(0, 100, 255, 0.75)
    border-left-width 4px
    border-top-color rgba(0, 100, 255, 0.75)
    border-top-width 4px
    bottom 20px
</style>
