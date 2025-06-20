<script lang="ts" setup>
import { useId } from "vue";

const props = defineProps<{
  control: any;
}>();

const id = useId();

const label = props.control.label;
const type = props.control.type;
const isChecked = props.control.checked;
const hasValidation = props.control.validation;
const validationMessage = props.control.validation.message;
</script>

<template>
  <div :class="styles.wrapper">
    <label :for="id">
      {{ label }}
    </label>
    <input :id="id" :class="styles.input" :type="type" :checked="isChecked" />
    <div :class="styles.errorMessage" v-if="hasValidation">
      {{ validationMessage }}
    </div>
  </div>
</template>

<style lang="scss" module="styles">
@use "@/assets/styles/vars.scss";

.wrapper {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
}

.input {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.errorMessage {
  color: vars.$color-error;
}
</style>
