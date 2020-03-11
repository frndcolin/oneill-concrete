<template lang="pug">
  #quick-contact.quick-contact--wrapper
    .quick-contact--form
      .quick-contact--header
        h5 Quick Contact
      .quick-contact--body
        .form-group
          label email
          input(type='email' placeholder='reply-to@mail.com')
        .form-group
          label message
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
    box-shadow 8px 8px 24px rgba(0, 0, 0, 0.5), 2px 2px 8px rgba(55, 55, 55, 0.25)
    padding 24px
    width 400px
  &--header
    border-bottom 4px solid var(--gray-2)
    color var(--gray-3)
    margin 0 auto 16px auto
    padding-bottom 4px
    text-align center
    width 75%
.form-group
  display flex
  flex-direction column
  &:last-of-type
    margin-bottom 32px
  label
    color var(--gray-2)
    font-size 14px
    line-height 1.418em
    margin 0 0 2px 4px
  input[type='email'], textarea
    border 2px solid var(--gray-1)
    box-shadow 4px 4px 16px rgba(55, 55, 55, 0.025), 2px 2px 8px rgba(55, 55, 55, 0.075)
    color var(--gray-3)
    font-size 16px
    margin 0
    padding 8px 0 8px 4px
  ::placeholder
    color var(--gray-2)
</style>
