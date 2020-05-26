<template lang="pug">
  .row.justify-content-around.align-items-center.py-4(:class='[reversed ? "flex-md-row-reverse" : ""]')
    .col-md-5
      g-image.img-block.img-fluid(src='~/assets/images/garage-floor.png')
    .col-md-5
      h3 Service Title
      p.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
</template>

<script>
export default {
  props: {
    reversed: {
      type: Boolean,
      default: false
    }
  }
};
</script>
