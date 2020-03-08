<template lang="pug">
  header.page-header
    nav
      .nav-logo
        span O'Neill Concrete Inc.
      ul.nav-list
        li.nav-item #[a(href='#services') services]
        li.nav-item #[a(href='#gallery') gallery]
        li.nav-item #[a(href='#contact') contact]
</template>

<style lang="stylus">
.page-header
  display flex
  height 80px
  justify-content center
  max-width 1080px
  position fixed
  top 0
  width 100vw
nav
  display flex
  justify-content space-between
</style>
