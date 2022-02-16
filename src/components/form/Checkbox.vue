<script>
  import Icon from "../Icon.vue";

  export default {
    data() {
      return {
        id: this.checkboxId,
      };
    },
    props: {
      checkboxId: String,
      modelValue: Boolean,
    },
    emits: ['update:modelValue'],
    components: { Icon },
  }
</script>

<template>
  <div class="checkbox-input">
    <input
      type="checkbox"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.checked)"
    >

    <label :for="id">
      <Icon icon="checkbox"></Icon>
    </label>
  </div>
</template>

<style scoped>
  .checkbox-input>input {
    display: none;
  }

  .checkbox-input>label {
    cursor:   pointer;
    display:  block;
    height:   1rem;
    width:    1rem;
  }

  .checkbox-input>label :deep(.checkbox .path-square) {
    fill:         transparent;
    stroke:       var(--gray-500);
    stroke-width: 2px;
    transition:   stroke .1s, fill .1s;
  }

  .checkbox-input>label :deep(.checkbox .path-check) {
    stroke:   white;
    stroke-width: 0px;
  }

  .checkbox-input>input[value="true"] + label :deep(.checkbox .path-square) {
    fill:   var(--gray-500);
    stroke: var(--gray-500);
  }

  .checkbox-input>input[value="true"] + label :deep(.checkbox .path-check) {
    stroke-width: 2px;
  }

</style>