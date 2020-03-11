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
  color white
  margin 0
  padding 8px 16px
  &.full
    width 100%
</style>
