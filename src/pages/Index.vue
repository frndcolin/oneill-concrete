<template lang='pug'>
  layout
    section#landing
      b-container
        b-row(align-h='center')
          b-col(cols='3')
            h1 LANDING
    section#welcome
      b-container
        b-row(align-h='center')
          b-col(cols='3')
            h1 WELCOME
      quote-feature
    section#commercial.service
      b-container
        b-row
          b-col(cols='6')
            span(style='display:block;content:"";height:80px;width:100%;background:#000000')
          b-col(cols='6')
            h1 COMMERCIAL
    section#residential.service.no-bg
      b-container
        b-row
          b-col(cols='6')
            h1 RESIDENTIAL
          b-col(cols='6')
            span(style='display:block;content:"";height:80px;width:100%;background:#000000')
    section#custom.service
      b-container
        b-row
          b-col(cols='6')
            span(style='display:block;content:"";height:80px;width:100%;background:#000000')
          b-col(cols='6')
            h1 CUSTOM
    section#gallery
      b-container
        b-row(align-h='center')
          b-col(cols='3')
            h1 GALLERY
    section#contact
      b-container
        b-row(align-h='center')
          b-col(cols='3')
            h1 CONTACT
</template>

<script>
import QuoteFeature from "../components/QuoteFeature";

export default {
  components: { QuoteFeature },
  metaInfo: {
    title: "O'Neill Concrete Inc."
  }
};
</script>
<style lang='stylus'>
.service
  background #999999
  &.no-bg
    background #ffffff
</style>
