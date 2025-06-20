<script lang="ts" setup>
import { useId } from "vue";

const props = defineProps<{
  control: any;
}>();

const id = useId();
const label = props.control.label;
const options = props.control.options;
const validationMessage = props.control.validation.message;

const hasValidation = props.control.validation;
</script>

<template>
  <div :class="styles.wrapper">
    <label :for="id">
      {{ label }}
    </label>
    <select :id="id" :class="styles.select">
      <option :class="styles.placeholderOption" value="">
        Выберите значение из списка
      </option>
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <div v-if="hasValidation">
      <span :class="styles.errorMessage">
        {{ validationMessage }}
      </span>
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

.select {
  padding: 10px 20px;
  border: 1px solid vars.$color-tertiary;
  border-radius: vars.$rounding;
  cursor: pointer;
}

.placeholderOption {
  display: none;
}

.errorMessage {
  color: vars.$color-error;
}
</style>
