<script lang="ts" setup>
import { ref, computed, watch, useId } from "vue";
import { useDebounce } from "@vueuse/core";
import styles from "@/components/GeneratedFormControlInput/GeneratedFormControlInput.module.scss";
import { DEBOUNCE_DELAY } from "@/components/GeneratedFormControlInput/GeneratedFormControlInput.data";
import { useValidation } from "@/composables/useValidation/useValidation.composable";
import type { IGeneratedFormControlInputProps } from "@/components/GeneratedFormControlInput/GeneratedFormControlInput.types";

const { control } = defineProps<IGeneratedFormControlInputProps>();

const modelIsValid = defineModel<boolean>("isValid", { required: true });

const { validateInput } = useValidation();

const inputValue = ref("");
const isFirstTouched = ref(false);
const id = useId();
const debouncedInputValue = useDebounce(inputValue, DEBOUNCE_DELAY);
const label = control.label;
const name = control.name;
const helpMessage = control.helpMessage;
const isRequired = control.required;
const validation = control.validation;

const validationTextInputMinLengthMessage =
  control.validation?.minLength?.message;

const validationTextInputMaxLengthMessage =
  control.validation?.maxLength?.message;

const validationEmailInputPatternMessage = control.validation?.pattern?.message;

const isInputValidationMessageVisible = computed(
  () =>
    (control.type === "text" || control.type === "password") &&
    isFirstTouched.value &&
    !modelIsValid.value
);

const isEmailInputValidationMessageVisible = computed(
  () => control.type === "email" && isFirstTouched.value && !modelIsValid.value
);

const inputCssClasses = computed(() => [
  styles.input,
  { [styles.errorInput]: !modelIsValid.value && isFirstTouched.value },
]);

if (validation || isRequired) {
  watch(debouncedInputValue, () => {
    if (!isFirstTouched.value) {
      isFirstTouched.value = true;
    }

    if (validation) {
      validateInput({
        validation,
        inputValue,
        modelIsValid,
      });
    }

    if (isRequired && !validation) {
      modelIsValid.value = inputValue.value.length > 0;
    }
  });
}
</script>

<template>
  <div :class="styles.wrapper">
    <label :for="id"> {{ label }} <span v-if="isRequired">*</span> </label>
    <input
      :id="id"
      :class="inputCssClasses"
      :type="control.type"
      :name="name"
      v-model.trim="inputValue"
    />
    <div :class="styles.helpMessage" v-if="helpMessage">
      {{ helpMessage }}
    </div>
    <div v-if="validation">
      <span :class="styles.errorMessage" v-if="isInputValidationMessageVisible">
        {{ validationTextInputMinLengthMessage }}.
        {{ validationTextInputMaxLengthMessage }}
      </span>
      <span
        :class="styles.errorMessage"
        v-else-if="isEmailInputValidationMessageVisible"
      >
        {{ validationEmailInputPatternMessage }}
      </span>
    </div>
  </div>
</template>
