<script lang="ts" setup>
import { computed, useId } from "vue";

const props = defineProps<{
  control: any;
}>();

const id = useId();

const label = props.control.label;
const hasValidation = props.control.validation;

const isTextInput = computed(() => props.control.type === "text");
const isEmailInput = computed(() => props.control.type === "email");
const isPasswordInput = computed(() => props.control.type === "password");
</script>

<template>
  <div :class="styles.wrapper">
    <label :for="id">
      {{ label }}
    </label>
    <input :id="id" :class="styles.input" :type="props.control.type" />
    <div v-if="hasValidation">
      <span :class="styles.errorMessage" v-if="isTextInput">
        {{ props.control.validation.minLength.message }}.
        {{ props.control.validation.maxLength.message }}
      </span>
      <span :class="styles.errorMessage" v-else-if="isEmailInput">
        {{ props.control.validation.message }}
      </span>
      <span :class="styles.errorMessage" v-else-if="isPasswordInput">
        {{ props.control.validation.minLength.message }}
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

.input {
  padding: 10px 20px;
  border: 1px solid vars.$color-tertiary;
  border-radius: vars.$rounding;
}

.errorMessage {
  color: vars.$color-error;
}
</style>
