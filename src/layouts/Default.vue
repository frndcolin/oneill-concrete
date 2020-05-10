<template lang='pug'>
  #page
    .media-bar
      .media-bar--content
        .media-bar--icons
          span phone
          span mail
          span ig
          span fb
    page-header
    slot
    page-footer
</template>

<script>
import PageFooter from "../components/PageFooter";
import PageHeader from "../components/PageHeader";

export default {
  components: {
    PageFooter,
    PageHeader
  }
};
</script>

<style lang="stylus" scoped>
.media-bar
  align-items center
  background var(--gray-4)
  display flex
  height 28px
  justify-content center
  &--content
    color white
    display flex
    justify-content flex-end
    width 80%
  &--icons
    span
      margin 0 16px
</style>
