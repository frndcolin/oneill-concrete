<template lang='pug'>
  layout
    section#landing
      b-container
        b-row(align-h='center')
          b-col.content-center--column
            h1#tagline {{ siteContent.banner_title }}
            p#banner-msg {{ siteContent.banner_message }}
            #banner-cta
              action-button(@clicked='$router.push("#contact")') start your quote
    section#welcome
      b-container
        b-row( align-h='center')
          b-col.content-center(md='8')
            .content-wrapper
              h2.text-center {{ siteContent.welcome_title }}
              p.text-indent-first {{ siteContent.welcome_message }}
      quote-feature
    section#services
      b-container
        .services-cards
          service-card
          service-card
    section#gallery
      image-gallery
    section#contact
      b-container
        b-row(align-h='center')
          b-col(cols='3')
            h1 CONTACT
    animator(target='#welcome' triggerValue='0.1' enterClass='fadeInRight' leaveClass='fadeOutRight' )
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
import ServiceSection from "../components/ServiceSection";
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
  letter-spacing 0.075em
  padding-top 40px
  text-shadow 8px 8px 16px rgba(53, 53, 53, 0.8), 6px 6px 4px rgba(53, 53, 53, 0.55)
  text-transform uppercase
#banner-msg
  color var(--white)
  font-size 20px
  margin 24px auto
  max-width 400px
#services
  background var(--gray-1)
  background-image linear-gradient(to bottom right, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.25))
.services-cards
  display flex
  justify-content space-around
</style>
