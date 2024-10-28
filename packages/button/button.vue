<template>
  <button class="yc-button" :class="[`yc-button-${type}`]" type="button">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "YcButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>
