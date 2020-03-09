<template lang='pug'>
  #page
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


<style lang="stylus">
body, html
  height 100%
body
  font-family -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  line-height 1.5
  margin 0
  padding 0
#app
  display flex
  flex-direction column
  height 100%
</style>
