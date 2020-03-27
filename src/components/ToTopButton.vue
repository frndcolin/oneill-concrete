<template lang="pug">
  #scroll-to-top(@click='scrollToTop')
    .scroll-icon
      .scroll-icon--wheel
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
  align-items center
  background var(--white)
  border 4px solid var(--gray-2)
  border-radius 50%
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
    border 4px solid var(--gray-3)
    border-radius 20px
    box-shadow var(--gray-shadow)
    content ''
    height 48px
    position relative
    width 32px
    &--wheel
      border 3px solid var(--gray-3)
      border-radius 4px
      content ''
      height 12px
      left 50%
      position absolute
      top 4px
      transform translateX(-50%)
    &--arrow
      border-left 4px solid rgba(0, 0, 0, 0.035)
      border-top 4px solid rgba(0, 0, 0, 0.035)
      bottom 4px
      content ''
      height 12px
      left 45%
      margin -4px auto
      position absolute
      transform rotate(45deg) translateX(-50%)
      width 12px
  &:hover
    background var(--gray-1)
    border-color var(--gray-3)
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
    border-left-color rgba(0, 0, 0, 0.01)
    border-left-width 2px
    border-top-color rgba(0, 0, 0, 0.01)
    border-top-width 2px
    bottom -4px
  50%
    border-left-color rgba(72, 72, 72, 0.5)
    border-left-width 4px
    border-top-color rgba(72, 72, 72, 0.5)
    border-top-width 4px
    bottom 8px
  100%
    border-left-color rgba(72, 72, 72, 0.025)
    border-left-width 2px
    border-top-color rgba(72, 72, 72, 0.025)
    border-top-width 2px
    bottom 12px
</style>
