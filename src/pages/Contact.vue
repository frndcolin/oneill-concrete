<template lang="pug">
  layout(dark)
    section#contact
      b-container
        b-row(align-h='center' align-v='center')
          b-col(cols='6')
            h2 Request a quote
            p.
              Thank you for choosing O'Neill Concrete INC for your next home or commercial project. Our foreman and his crew have over ten years of experience in the concrete industry. With us, your vision can be made a reality!
          b-col(cols='5' offset-sm='1')
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
                b-form-group(id="input-group---name" label="Name" label-for="form-name" label-class='form-label')
                  b-form-input(
                    id="name"
                    name="name"
                    v-model="form.name"
                    required
                    placeholder="Enter name")
                b-form-group(id="input-group--email" label="Email" label-for="email" label-class='form-label')
                  b-form-input(
                    id="email"
                    v-model="form.email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter email")
                b-form-group(id="input-group---service" label="Service" label-for="form-service" label-class='form-label')
                  b-form-select(
                    id="service"
                    name="service"
                    v-model="form.service"
                    :options="services")
                b-form-group(id="input-group--message" label="Message" label-for="message" label-class='form-label')
                  b-form-textarea(
                    id="message"
                    name="message"
                    v-model="form.message"
                    required
                    placeholder="Enter message")
                .form-action--wrapper
                  action-button(@clicked='$router.push("#contact")' isFullWidth) start your quote today
</template>

<script>
import ActionButton from "../components/ActionButton";

export default {
  components: { ActionButton },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
        service: null
      },
      services: ["Slab/Patio", "Walkway", "Driveway/Extensions"]
    };
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

<style lang="stylus">
#contact
  margin 40px 0
.contact-form
  background-color var(--gray-4)
  border-radius 4px
  box-shadow 4px 4px 16px rgba(0, 0, 0, 0.15), 4px 4px 12px rgba(0, 0, 0, 0.2)
  padding 48px 24px 24px 24px
.form-action--wrapper
  padding 24px 0 0 0
label
  color var(--gray-2)
  font-size 14px
  font-weight bold
  margin 0 0 4px 4px
</style>
