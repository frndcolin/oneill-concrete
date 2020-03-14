<template lang="pug">
  #quick-contact.quick-contact--wrapper
    .quick-contact--form
      .quick-contact--header
        h4 Quick Contact
      .quick-contact--body
        .form-group
          label e-mail
          input(type='email' placeholder='reply-to@mail.com')
        .form-group
          label Message
          textarea(rows='4' placeholder='Quick contact for questions about services...')
        action-button(isFullWidth) Start a conversation
</template>

<script>
import ActionButton from "../components/ActionButton";

export default {
  components: { ActionButton }
};
</script>

<style lang="stylus" scoped>
.quick-contact
  &--wrapper
    align-items center
    display flex
    justify-content flex-end
  &--form
    background var(--white)
    box-shadow var(--gray-shadow)
    font-family var(--body-font)
    letter-spacing 0.04em
    padding 24px
    width 400px
  &--header
    color var(--gray-4)
    margin 0 auto 16px auto
    padding-bottom 4px
    text-align center
    width 100%
.form-group
  display flex
  flex-direction column
  &:last-of-type
    margin-bottom 32px
  label
    color var(--gray-4)
    font-size 14px
    line-height 1.418em
    margin 0 0 2px 4px
  input[type='email'], textarea
    border 2px solid var(--gray-3)
    box-shadow var(--gray-shadow)
    color var(--gray-3)
    font-size 16px
    margin 0
    padding 8px 0 8px 4px
  ::placeholder
    color var(--gray-2)
</style>
