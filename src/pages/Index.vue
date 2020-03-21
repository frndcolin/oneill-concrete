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
      service-section#commercial
        template(v-slot:content)
          h2 Commercial Services
          p.
            O'Neill Concrete Inc. is a full service concrete company that has proudly served the Tri-Conuty area with forty five years experience. Our trained professionals focus on customer service and quality work. We accomplish this by providing superior service, quality products and competitive pricing. O'Neill Concrete Inc works with residential, commercial and industrial customers where our experience is the difference on all of our projects.
      service-section#residential.no-bg(flip)
        template(v-slot:content)
          h2 Residential Services
          p.
            Testing slot for service component. O'Neill Concrete Inc. is a full service concrete company that has proudly served the Tri-Conuty area with forty five years experience. Our trained professionals focus on customer service and quality work. We accomplish this by providing superior service, quality products and competitive pricing. O'Neill Concrete Inc works with residential, commercial and industrial customers where our experience is the difference on all of our projects.
      service-section#custom
        template(v-slot:content)
          h2 Custom Services
          p.
            Testing slot for service component. O'Neill Concrete Inc. is a full service concrete company that has proudly served the Tri-Conuty area with forty five years experience. Our trained professionals focus on customer service and quality work. We accomplish this by providing superior service, quality products and competitive pricing. O'Neill Concrete Inc works with residential, commercial and industrial customers where our experience is the difference on all of our projects.
    section#gallery
      b-container
        b-row(align-h='center')
          b-col.content-center
            image-gallery
    section#contact
      b-container
        b-row(align-h='center')
          b-col(cols='3')
            h1 CONTACT
    animator(target='#welcome' triggerValue='0.1' enterClass='fadeInRight' leaveClass='fadeOutRight')
      to-top-button
</template>

<script>
import QuickContact from "../components/QuickContact";
import QuoteFeature from "../components/QuoteFeature";
import ImageGallery from "../components/ImageGallery";
import Animator from "../components/Animator";
import ToTopButton from "../components/ToTopButton";
import ServiceSection from "../components/ServiceSection";

export default {
  components: {
    QuickContact,
    QuoteFeature,
    ImageGallery,
    Animator,
    ToTopButton,
    ServiceSection
  },
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
#tagline
  color var(--white)
  letter-spacing 0.075em
  text-shadow 8px 8px 16px rgba(53, 53, 53, 0.8), 6px 6px 4px rgba(53, 53, 53, 0.55)
  text-transform uppercase
</style>
