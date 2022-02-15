<script>
  import { convertPxToRem } from '../utils';

  export default {
    data() {
      return {
        svgIcon: '',
        svgSize: this.size,
      }
    },
    props: {
      icon: String,
      size: Number, // Has to be pixels.
    },
    methods: {
      convertPxToRem,
      async requestIcon() {
        const request = await fetch(`./src/assets/svg/${this.icon}.svg`);

        this.svgIcon = await request.text();
      },
    },
    created() {
      this.requestIcon();
    },
  }

</script>

<template>
  <i v-html="svgIcon"></i>
</template>

<style scoped>
  i { display: inline-flex; }

  i :deep(.feather) {
    height:           v-bind(convertPxToRem(svgSize));
    fill:             none;
    stroke:           currentColor;
    stroke-linecap:   round;
    stroke-linejoin:  round;
    stroke-width:     2px;
    width:            v-bind(convertPxToRem(svgSize));
  }
</style>