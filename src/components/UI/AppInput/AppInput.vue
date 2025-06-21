<script lang="ts" setup>
import { ref, computed, watch, useId } from "vue";
import styles from "@/components/UI/AppInput/AppInput.module.scss";
import { isNumber } from "@/types/guards/isNumber.guard";
import type { IAppInputProps } from "@/components/UI/AppInput/AppInput.types";

const props = defineProps<IAppInputProps>();
const input = defineModel<string>({ default: "" });

const isInputValid = ref(false);

const id = useId();

const label = props.control.label;
const hasValidation = props.control.validation;
const inputProjectedMinLength = props.control.validation?.minLength?.value;
const inputProjectedMaxLength = props.control.validation?.maxLength?.value;

const validationTextInputMinLengthMessage =
  props.control.validation?.minLength?.message;

const validationTextInputMaxLengthMessage =
  props.control.validation?.maxLength?.message;

const validationPasswordInputMinLengthMessage =
  props.control.validation?.minLength?.message;

const isTextInput = computed(() => props.control.type === "text");
const isEmailInput = computed(() => props.control.type === "email");
const isPasswordInput = computed(() => props.control.type === "password");

const validateInput = () => {
  const hasMinLength = isNumber(inputProjectedMinLength);
  const hasMaxLength = isNumber(inputProjectedMaxLength);

  if (!hasMinLength && !hasMaxLength) {
    isInputValid.value = true;
    return;
  }

  const isValidByMinLength =
    !hasMinLength || input.value.length >= inputProjectedMinLength;

  const isValidByMaxLength =
    !hasMaxLength || input.value.length <= inputProjectedMaxLength;

  isInputValid.value = isValidByMinLength && isValidByMaxLength;
};

if (hasValidation) {
  watch(input, () => {
    validateInput();
    console.log("input data", input.value);
  });
}
</script>

<template>
  <div :class="styles.wrapper">
    <label :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      :class="styles.input"
      :type="props.control.type"
      v-model.trim="input"
    />
    <div v-if="hasValidation">
      <span :class="styles.errorMessage" v-if="isTextInput && !isInputValid">
        {{ validationTextInputMinLengthMessage }}.
        {{ validationTextInputMaxLengthMessage }}
      </span>
      <span
        :class="styles.errorMessage"
        v-else-if="isEmailInput && !isInputValid"
      >
        {{ props.control.validation?.message }}
      </span>
      <span
        :class="styles.errorMessage"
        v-else-if="isPasswordInput && !isInputValid"
      >
        {{ validationPasswordInputMinLengthMessage }}
      </span>
    </div>
  </div>
</template>
