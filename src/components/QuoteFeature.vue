<template lang="pug">
  #quote-feature
    .feature--wrapper
      h5.tagline Have a project not listed? Maybe we can help!
      action-button Get in touch
</template>

<script>
import ActionButton from "../components/ActionButton";

export default {
  components: { ActionButton }
};
</script>

<style lang='stylus' scoped>
#quote-feature
  align-items center
  background var(--gray-4)
  box-shadow var(--gray-shadow)
  display flex
  height 120px
  justify-content center
  left 50%
  letter-spacing 0.04em
  max-width 1140px
  position absolute
  top 100%
  transform translate(-50%, -50%)
  width 75%
  z-index 9
.feature
  &--wrapper
    align-items center
    display flex
    justify-content space-around
    width 85%
    .tagline
      border-bottom 4px solid var(--white)
      color white
      line-height 1.418
      margin 0
      max-width 65%
</style>
