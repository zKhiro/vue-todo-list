<script>
  import { convertPxToRem } from '../utils';

  export default {
    data() {
      return {
        svgIcon: '',
        svgSize: this.size || 16,
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
    watch: {
      icon() {
        this.requestIcon();
      }
    },
  }

</script>

<template>
  <i v-html="svgIcon"></i>
</template>

<style scoped>
  i { display: inline-flex; }

  i :deep(.feather) {
    stroke-width: 2px;
  }

  i :deep(.icon) {
    stroke-width: 1px;
  }

  i :deep(.feather), i :deep(.icon) {
    height:           v-bind(convertPxToRem(svgSize));
    fill:             none;
    stroke:           currentColor;
    stroke-linecap:   round;
    stroke-linejoin:  round;

    width:            v-bind(convertPxToRem(svgSize));
  }
</style>