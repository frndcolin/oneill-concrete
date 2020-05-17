<template lang="pug">
  a.nav-link(:href='link')
    span.text {{ text }}
    span.line.line--right
    span.line.line--top
    span.line.line--left
    span.line.line--bottom
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="stylus" scoped>
thickness = 4px
pad = 16px
extra = calc(pad * 1.2)
bgcolor = var(--primary)
.nav-link
  color var(--gray-1)
  cursor pointer
  font-family var(--secondary-font)
  font-size 0.9rem
  font-weight 600
  letter-spacing 0.15em
  margin-left 20px
  padding 8px 12px 2px 12px
  position relative
  transition all 1s
.line
  background bgcolor
  position absolute
  &--right, &--left
    bottom 0
    top 0
    transform scale3d(1, 0, 1)
    width thickness
  &--top, &--bottom
    height thickness
    left 0
    right 0
  &--right
    right 0
    transform-origin top
    transition transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s
  &--top
    top 0
    transform scale3d(0, 1, 1)
    transform-origin left
    transition transform 0.08s linear 0.43s
  &--left
    left 0
    transform-origin bottom
    transition transform 0.08s linear 0.51s
  &--bottom
    bottom -4px
    transform scale3d(0, 1, 1)
    transform-origin right
    transition transform 0.3s cubic-bezier(1, 0, 0.65, 1.01)
a.nav-link:hover, a.nav-link:active
  color var(--white)
  .line
    transform scale3d(1, 1, 1)
    &--right
      transform-origin bottom
      transition transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s
    &--top
      transform-origin right
      transition transform 0.08s linear 0.4s
    &--left
      transform-origin top
      transition transform 0.08s linear 0.48s
    &--bottom
      transform-origin left
      transition transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s
</style>

