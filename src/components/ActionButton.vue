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
  border-radius 2px
  box-shadow 0 8px 24px rgba(100, 100, 100, 0.2), 4px 4px 8px rgba(100, 100, 100, 0.2)
  color white
  font-family var(--body-font)
  letter-spacing 0.05em
  line-height 1.418em
  margin 0
  padding 16px 24px
  text-transform uppercase
  transition all 0.3s
  &.full
    width 100%
  &:hover
    background var(--primary-up1)
    box-shadow 0 8px 24px rgba(100, 100, 100, 0.3), 4px 4px 12px rgba(100, 100, 100, 0.4)
    transform translate(-0.5px, -1px)
</style>
