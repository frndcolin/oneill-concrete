<template lang="pug">
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
</template>
