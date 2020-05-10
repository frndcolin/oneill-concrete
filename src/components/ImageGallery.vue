<template lang="pug">
  b-container(fluid)
    b-row(align-h='center')
      b-col(md='10')
        h2.text-center Our Work
        vueper-slides(
          class="no-shadow"
          :visible-slides="3"
          :gap="2"
          arrows-outside
          :slide-ratio="1 / 3"
          :dragging-distance="70"
          slide-image-inside
        )
          vueper-slide(v-for="(slide, i) in $static.images.edges[0].node.images" :key="i" :image="slide.src")
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
.gallery-slides
  box-shadow 0 0 24px rgba(100, 100, 100, 0.25), 8px 8px 16px rgba(172, 172, 172, 0.2)
.vueperslide
  &:not(.vueperslide--active)
    .vueperslide__image
      transform scale(0.85)
      transition 0.3s ease-in-out
  .vueperslide--active
    .vueperslide__image
      box-shadow 0 0 10px rgba(0, 0, 0, 0.2)
      transform scale(1)
      z-index 1
</style>
