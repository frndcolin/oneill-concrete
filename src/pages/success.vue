<template>
  <Layout>
    <h1 class="mb-4">Success!</h1>
    <img class="mail-image" src="../assets/images/mail-sent.svg" />
    <h3 class="mt-5 text-center">Your mail was successfully sent!</h3>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Success"
  }
};
</script>

<style lang="stylus">
.mail-image
  display block
  margin auto
  max-width 500px
  width 90%
</style>

