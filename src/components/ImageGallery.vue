<template lang="pug">
  b-container(fluid)
    b-row(align-h='center')
      b-col(cols='10')
        .gallery-wrapper
          .gallery-item
            img.galler-image(src="../assets/images/garage-floor.png")
          .gallery-item
            img.galler-image(src="../assets/images/garage-floor.png")
          .gallery-item
            img.galler-image(src="../assets/images/garage-floor.png")
          .gallery-item
            img.galler-image(src="../assets/images/garage-floor.png")
          .gallery-item
            img.galler-image(src="../assets/images/garage-floor.png")
          .gallery-item
            img.galler-image(src="../assets/images/garage-floor.png")
</template>

<static-query>
  query {
    images: allContent(filter: { path: { eq: "/content/gallery-images/" }}) {
      edges {
        node {
          images
        }
      }
    }
  }
</static-query>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide }
};
</script>

<style lang='stylus'>
.gallery-wrapper
  display grid
  grid-column-gap 4px
  grid-row-gap 4px
  grid-template-columns repeat(3, 1fr)
  grid-template-rows 220px 220px 220px
.gallery-item
  height 100%
  overflow hidden
  position relative
  width 100%
  &:nth-child(1)
    grid-column-end 3
    grid-column-start 1
  &:nth-child(2)
    grid-column-end 4
    grid-column-start 3
    grid-row-end 3
    grid-row-start 1
  &:nth-child(3)
    grid-column-end 2
    grid-column-start 1
    grid-row-end 4
    grid-row-start 2
  &:nth-child(4)
    grid-column-end 3
    grid-column-start 2
  & > img
    object-fit cover
    transition all 0.3s ease
  &::after
    background-image linear-gradient(to bottom right, #333333, #000000)
    content ''
    display block
    height 100%
    left 0
    opacity 0.4
    position absolute
    top 0
    transition all 0.8s ease
    width 100%
  &:hover > img
    transform scale(1.2)
  &:hover::after
    opacity 0
</style>
