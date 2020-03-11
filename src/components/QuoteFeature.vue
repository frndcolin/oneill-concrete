<template lang="pug">
  #quote-feature
    .feature--wrapper
      h5.tagline Business highlight tag line goes here, to attract customers
      action-button start your quote today
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
  background var(--gray-3)
  display flex
  height 96px
  justify-content center
  left 50%
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
    width 80%
    .tagline
      color white
      margin 0
</style>
