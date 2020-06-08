<template lang='pug'>
  #page
    page-header(:dark='dark')
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
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  }
};
</script>
