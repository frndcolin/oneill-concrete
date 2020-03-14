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
    #services
      section#commercial.service
        b-container
          b-row
            b-col.content-left.p-0(cols='6')
              .service-image
                img.service-image--overlay(src='../assets/images/oc-logo.svg')
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
              .service-image
                img.service-image--overlay(src='../assets/images/oc-logo.svg')
                g-image(src='~/assets/images/garage-floor.png' width='480')
      section#custom.service
        b-container
          b-row
            b-col.content-left.p-0(cols='6')
              .service-image
                img.service-image--overlay(src='../assets/images/oc-logo.svg')
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
  &-image
    box-shadow var(--gray-shadow)
    position relative
    transition all 0.3s
    &::after
      background linear-gradient(to bottom right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))
      content ''
      height 100%
      left 0
      position absolute
      top 0
      transition all 0.3s
      width 100%
    &:hover
      box-shadow var(--gray-shadow--hover)
      transform scale(1.05)
      &::after
        opacity 0.1
    &--overlay
      bottom 16px
      height 56px
      opacity 0.5
      position absolute
      right 16px
      transition all 0.4s
      width auto
    &:hover .service-image--overlay
      animation-duration 1.5s
      animation-fill-mode forwards
      animation-name spin
      animation-timing-function ease-in-out
#tagline
  color var(--white)
  letter-spacing 0.075em
  text-shadow 8px 8px 16px rgba(53, 53, 53, 0.8), 6px 6px 4px rgba(53, 53, 53, 0.55)
  text-transform uppercase
@keyframes spin
  from
    transform rotate(0deg)
  to
    transform rotate(360deg)
</style>
