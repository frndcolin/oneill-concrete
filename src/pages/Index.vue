<template lang='pug'>
  layout
    section#landing
      b-container
        b-row(align-h='center')
          b-col.content-center--column
            h1#tagline {{ siteContent.banner_title }}
            #banner-msg Commercial and residential concrete solutions for Cape Cod and South Shore MA
            #banner-cta
              action-button(@clicked='$router.push("#contact")') start your quote today
    section#services
      b-container
        b-row
          b-col(cols='4')
            service-card
              template(v-slot:header) Patio/Slabs
              template(v-slot:body).
                Patio/Slabs O'Neill Concrete Inc. is a full service concrete company that has proudly served the Tri-Conuty area with forty five years experience. Our trained professionals focus on customer service and quality work.
          b-col(cols='4')
            service-card
              template(v-slot:header) Driveway/Extensions
              template(v-slot:body).
                 Driveway/Extensions O'Neill Concrete Inc. is a full service concrete company that has proudly served the Tri-Conuty area with forty five years experience. Our trained professionals focus on customer service and quality work.
          b-col(cols='4')
            service-card
              template(v-slot:header) Walks/Sidewalks
              template(v-slot:body).
                Walks/Sidewalks O'Neill Concrete Inc. is a full service concrete company that has proudly served the Tri-Conuty area with forty five years experience. Our trained professionals focus on customer service and quality work.
      quote-feature
    section#welcome
      b-container
        b-row( align-h='center')
          b-col.content-center(md='8')
            .content-wrapper
              h2.text-center {{ siteContent.welcome_title }}
              p.text-indent-first {{ siteContent.welcome_message }}
    section#gallery
      image-gallery
    animator(target='#welcome' trigger='0.1' enterClass='fadeInRight' leaveClass='fadeOutRight' )
      to-top-button
</template>

<page-query>
query {
  services: allContent(filter: { path: { ne: "/content/site-content/" }}) {
    edges {
      node {
        service_title
        service_description
        path
      }
    }
  }
  content: allContent(filter: { path: { eq: "/content/site-content/" }}) {
    edges {
      node {
        banner_title
        banner_message
        welcome_title
        welcome_message
      }
    }
  }
}
</page-query>

<script>
import QuickContact from "../components/QuickContact";
import QuoteFeature from "../components/QuoteFeature";
import ImageGallery from "../components/ImageGallery";
import Animator from "../components/Animator";
import ToTopButton from "../components/ToTopButton";
import ServiceCard from "../components/ServiceCard";
import ActionButton from "../components/ActionButton";

export default {
  components: {
    ActionButton,
    QuickContact,
    QuoteFeature,
    ImageGallery,
    Animator,
    ToTopButton,
    ServiceCard
  },
  metaInfo: {
    title: "O'Neill Concrete Inc."
  },
  computed: {
    siteContent() {
      const {
        banner_title,
        banner_message,
        welcome_title,
        welcome_message
      } = this.$page.content.edges[0].node;
      return { banner_message, banner_title, welcome_title, welcome_message };
    },
    services() {
      const allServices = this.$page.services.edges.map(edge => {
        return {
          title: edge.node.service_title,
          description: edge.node.service_description
        };
      });
      return allServices;
    }
  }
};
</script>

<style lang='stylus'>
#tagline
  color var(--gray-2)
  line-height 1.5em
  margin 0 auto
  padding 0
  text-transform uppercase
  width 80%
#banner-msg
  color var(--white)
  font-size 20px
  max-width 560px
  font-family var(--secondary-font)
  font-weight 300
  margin 0 auto
  letter-spacing 0.1em
#banner-cta
  margin-top 56px
#welcome
  background var(--gray-1)
.services-cards
  display flex
  justify-content space-around
</style>
