<template lang="pug">
  button(:class='{full : isFullWidth}')
    slot
</template>

<script>
export default {
  props: {
    isFullWidth: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="stylus">
button
  background var(--primary)
  border none
  box-shadow var(--primary-shadow)
  color white
  font-family var(--body-font)
  letter-spacing 0.04em
  margin 0
  padding 16px 24px
  text-transform uppercase
  transition all 0.3s
  &.full
    width 100%
  &:hover
    background var(--primary-up1)
    box-shadow var(--primary-shadow--hover)
    transform translate(-1px, -2px)
</style>
