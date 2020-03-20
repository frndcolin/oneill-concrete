<template lang="pug">
  #to-top-button
    .icon
      a(href='#')
        g-image(src='~/assets/images/spade.svg')
    p.hint To Top
</template>

<style lang="stylus" scoped>
#to-top-button
  background transparent
  border 4px solid #f2f2f2
  border-radius 50%
  bottom 32px
  cursor pointer
  opacity 0.85
  padding 4px
  position fixed
  right 48px
  transition all 0.3s
  z-index 9999
  .icon
    background #f2f2f2
    border-radius 50%
    padding 8px
    transition all 0.3s
    img
      height auto
      transition all 0.3s
      transition-delay 0.1s
      width 48px
  .hint
    bottom 8px
    color var(--primary-up2)
    font-size 14px
    font-weight 700
    left 50%
    opacity 0
    position absolute
    text-align center
    transform translateX(-50%)
    transition bottom 0.3s, opacity 0.4s
    width 100%
    z-index -1
  &:hover
    background var(--white)
    border-color var(--primary-up2)
    box-shadow var(--gray-shadow)
    opacity 1
    .icon
      background var(--white)
      img
        transform scale(1.2)
    .hint
      bottom -44px
      opacity 1
</style>
