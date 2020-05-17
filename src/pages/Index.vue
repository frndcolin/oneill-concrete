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
        .services-cards
          service-card
          service-card
    section#gallery
      image-gallery
    section#contact
      b-container
        b-row(align-h='center')
          b-col(cols='6')
            h2 CONTACT
            .contact-form
              b-form(
                name="contact"
                method="post"
                @submit.prevent="handleSubmit"
                action="/success/"
                data-netlify="true"
                data-netlify-honeypot="bot-field")
                input(type="hidden" name="name" value="contact")
                p(hidden)
                  label Don’t fill this out:
                    input(name="bot-field")
                b-form-group(id="input-group-2" label="Name:" label-for="form-name")
                  b-form-input(
                    id="name"
                    name="name"
                    v-model="form.name"
                    required
                    placeholder="Enter name")
                b-form-group(
                  id="input-group-1"
                  label="Email:"
                  label-for="email")
                  b-form-input(
                    id="email"
                    v-model="form.email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter email")
                b-form-group( id="input-group-3" label="Message:" label-for="message")
                  b-form-textarea(
                    id="message"
                    name="message"
                    v-model="form.message"
                    required
                    placeholder="Enter message")
                b-button(type="submit" variant="primary") Submit
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
  color var(--gray-1)
  letter-spacing 0.06em
  margin 16px
  padding 40px 0 0 0
  text-shadow 8px 8px 16px rgba(53, 53, 53, 0.4), 6px 6px 4px rgba(53, 53, 53, 0.55)
  text-transform uppercase
#banner-msg
  color var(--white)
  font-size 20px
  padding-bottom 64px
#services
  background var(--gray-1)
  background-image linear-gradient(to bottom right, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.25))
.services-cards
  display flex
  justify-content space-around
</style>
