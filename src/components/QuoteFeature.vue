<template lang="pug">
  #quote-feature
    .feature--wrapper
      h5.tagline Business highlight tag line goes here, to attract customers
      action-button start your quote
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
  letter-spacing 0.075em
  max-width 1040px
  position absolute
  top 100%
  transform translate(-50%, -50%)
  width 65%
  z-index 9
.feature
  &--wrapper
    align-items center
    display flex
    justify-content space-between
    width 85%
    .tagline
      color white
      margin 0
      max-width 65%
</style>
