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
