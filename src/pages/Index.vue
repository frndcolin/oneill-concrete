<template lang='pug'>
  layout
    section#landing
      b-container
        b-row(align-h='center')
          b-col.content-center--column
            h1#tagline {{ siteContent.banner_title }}
            #banner-msg Concrete solutions for Cape Cod and South Shore MA
            #banner-cta
              action-button(@clicked='$router.push("#contact")') start your quote today
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
        service(v-for='i in 3' :reversed='i % 2 === 0')
    section#gallery
      image-gallery
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
import Service from "../components/Service";
import ActionButton from "../components/ActionButton";

export default {
  components: {
    ActionButton,
    QuickContact,
    QuoteFeature,
    ImageGallery,
    Animator,
    ToTopButton,
    ServiceCard,
    Service
  },
  metaInfo: {
    title: "O'Neill Concrete Inc."
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
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
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.form
        })
      })
        .then(() => this.$router.push("/success"))
        .catch(error => alert(error));
    }
  }
};
</script>

<style lang='stylus'>
#tagline
  color var(--gray-2)
  margin 16px
  padding 56px 0 0 0
  text-transform uppercase
#banner-msg
  color var(--white)
  font-size 20px
  padding-bottom 64px
#services
  background var(--gray-1)
.services-cards
  display flex
  justify-content space-around
</style>
