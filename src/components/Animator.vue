<template lang="pug">
  transition(
    name="custom-classes-transition"
    :enter-active-class="'animated ' + enterClass"
    :leave-active-class="'animated ' + leaveClass"
  )
    slot(v-if='inView')
</template>

<script>
export default {
  data() {
    return {
      inView: false,
      viewHeight: 0,
      trigger: 100,
      element: null
    };
  },
  props: {
    target: { type: String, default: "" },
    triggerValue: { type: String, default: "1" },
    enterClass: { type: String, default: "bounceIn" },
    leaveClass: { type: String, default: "bounceOut" }
  },
  metaInfo: {
    link: [
      {
        href: "https://cdn.jsdelivr.net/npm/animate.css@3.5.1",
        rel: "stylesheet",
        type: "text/css"
      }
    ]
  },
  methods: {
    watchScroll() {
      const top = this.element
        ? this.element.getBoundingClientRect().top
        : null;
      const trigger = this.viewHeight * parseFloat(this.triggerValue);
      this.inView = top !== null ? top < this.viewHeight - trigger : false;
    }
  },
  mounted() {
    this.element = document.querySelector(this.target);
    this.viewHeight = window.innerHeight;
    window.addEventListener("scroll", this.watchScroll);
  }
};
</script>
