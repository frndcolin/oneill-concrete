<template lang="pug">
  b-container
    b-row(align-h='center')
      b-col.content-center
        .image-gallery--wrapper
          h2(style='text-align:center') Our Work
          .image-gallery
            .image-gallery--item(v-for='n in 12' @click='showImageModal' data-image-src='')
              g-image(src='~/assets/images/garage-floor.png' height='200' width='200')
          #image-modal(v-if='showModal' @click='showModal = !showModal')
            .image-modal--content
              img(:src='modalImage')
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      modalImage: "/assets/images/garage-floor.png"
    };
  },
  methods: {
    showImageModal(e) {
      this.modalImage = e.target.firstChild.dataset.srcset.split(" ")[0];
      console.log(this.modalImage);
      this.showModal = true;
    }
  }
};
</script>

<style lang="stylus">
.image-gallery
  display grid
  grid-template-columns 1fr 1fr 1fr 1fr
  grid-template-rows 1fr 1fr 1fr 1fr
  max-width 800px
  &--item
    box-shadow var(--gray-shadow)
    cursor pointer
    height 200px
    margin 4px
    overflow hidden
    position relative
    width 200px
    &::after
      background-image linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.5))
      content ''
      height 100%
      left 0
      position absolute
      top 0
      transition all 0.5s
      width 100%
    img
      transition all 0.3s
    &:hover
      box-shadow var(--gray-shadow--hover)
      &::after
        opacity 0.1
      img
        transform scale(1.5)
#image-modal
  align-items center
  background rgba(56, 56, 56, 0.75)
  content ''
  display flex
  height 100vh
  justify-content center
  left 0
  position fixed
  top 0
  width 100vw
.image-modal--content
  align-items center
  display flex
  height 85vh
  justify-content center
  width 80vw
  img
    height 100%
    width auto
</style>
