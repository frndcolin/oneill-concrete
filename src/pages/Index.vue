<template lang='pug'>
  layout
    section#landing
      b-container
        b-row
          b-col.content-center(cols='7')
            h1#tagline Quick Business Tag Line Goes Here
          b-col(cols='5' align-self='center')
            quick-contact
    section#welcome
      b-container
        b-row( align-h='center')
          b-col.content-center(cols='8')
            .content-wrapper
              h2 Welcome message about company and services
              p.
                O'Neill Concrete Inc. is a full service concrete company that has proudly served the Tri-Conuty area with forty five years experience. Our trained professionals focus on customer service and quality work. We accomplish this by providing superior service, quality products and competitive pricing. O'Neill Concrete Inc works with residential, commercial and industrial customers where our experience is the difference on all of our projects.
      quote-feature
    section#commercial.service
      b-container
        b-row
          b-col.content-left.p-0(cols='6')
            g-image(src='~/assets/images/garage-floor.png' width='480')
          b-col.content-center(cols='6')
            .content-wrapper
              h2 Commercial Services
              p.
                O'Neill Concrete Inc. is a full service concrete company that has proudly served the Tri-Conuty area with forty five years experience. Our trained professionals focus on customer service and quality work. We accomplish this by providing superior service, quality products and competitive pricing. O'Neill Concrete Inc works with residential, commercial and industrial customers where our experience is the difference on all of our projects.
    section#residential.service.no-bg
      b-container
        b-row
          b-col.content-center(cols='6')
            .content-wrapper
              h2 Residential Services
              p.
                O'Neill Concrete Inc. is a full service concrete company that has proudly served the Tri-Conuty area with forty five years experience. Our trained professionals focus on customer service and quality work. We accomplish this by providing superior service, quality products and competitive pricing. O'Neill Concrete Inc works with residential, commercial and industrial customers where our experience is the difference on all of our projects.
          b-col.content-right.p-0(cols='6')
            g-image(src='~/assets/images/garage-floor.png' width='480')
    section#custom.service
      b-container
        b-row
          b-col.content-left.p-0(cols='6')
            g-image(src='~/assets/images/garage-floor.png' width='480')
          b-col.content-center(cols='6')
            .content-wrapper
              h2 Custom Services
              p.
                O'Neill Concrete Inc. is a full service concrete company that has proudly served the Tri-Conuty area with forty five years experience. Our trained professionals focus on customer service and quality work. We accomplish this by providing superior service, quality products and competitive pricing. O'Neill Concrete Inc works with residential, commercial and industrial customers where our experience is the difference on all of our projects.
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
import QuickContact from "../components/QuickContact";
import QuoteFeature from "../components/QuoteFeature";

export default {
  components: { QuickContact, QuoteFeature },
  metaInfo: {
    title: "O'Neill Concrete Inc."
  },
  data() {
    return {
      services: [
        {
          title: "Residential",
          imgUrl: "~/assets/images/garage-floor.png"
        },
        {
          title: "Commercial",
          imgUrl: "~/assets/images/garage-floor.png"
        }
      ]
    };
  }
};
</script>
<style lang='stylus'>
.service
  background var(--gray-1)
  &.no-bg
    background var(--white)
#tagline
  color var(--white)
  text-shadow 4px 4px 24px rgba(55, 55, 56, 0.5), 2px 2px 8px rgba(55, 55, 56, 0.75)
  text-transform uppercase
</style>
