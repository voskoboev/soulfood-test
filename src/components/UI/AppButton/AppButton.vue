<script lang="ts" setup>
const props = defineProps<{
  control: any;
}>();

const type = props.control.type;
const label = props.control.label;
</script>

<template>
  <button :class="styles.button" :type="type">
    {{ label }}
  </button>
</template>

<style lang="scss" module="styles">
@use "sass:color";
@use "@/assets/styles/vars.scss";

.button {
  padding: 10px 20px;
  background-color: vars.$color-accent;
  border-radius: vars.$rounding;
  color: vars.$color-bright;
  box-shadow: rgba(236, 74, 55, 0.192) 4.80759px 4.80759px 19.2304px 0px,
    rgba(255, 255, 255, 0.29) 2.88455px 2.88455px 9.61518px 0px inset;
  transition: 0.2s background-color ease;

  @media (any-hover: hover) {
    &:hover {
      background-color: color.adjust(vars.$color-accent, $lightness: -5%);
      transition: 0.2s background-color ease;
    }
  }

  &:active {
    background-color: vars.$color-accent;
  }
}
</style>
