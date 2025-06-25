<script lang="ts" setup>
import { ref, computed, watch, useId } from "vue";
import { useDebounce } from "@vueuse/core";
import styles from "@/components/GeneratedFormControlInput/AppFormControlInput.module.scss";
import { DEBOUNCE_DELAY } from "@/components/GeneratedFormControlInput/GeneratedFormControlInput.data";
import { useValidation } from "@/composables/useValidation/useValidation.composable";
import type { IGeneratedFormControlInputProps } from "@/components/GeneratedFormControlInput/GeneratedFormControlInput.types";

const { control } = defineProps<IGeneratedFormControlInputProps>();

const modelValue = defineModel<string>("data", { required: true });
const modelIsValid = defineModel<boolean>("isValid", { required: true });

const { validateInput } = useValidation();

const isFirstTouched = ref(false);
const id = useId();
const debouncedModelValue = useDebounce(modelValue, DEBOUNCE_DELAY);
const label = control.label;
const name = control.name;
const isRequired = control.required;
const validation = control.validation;

const validationTextInputMinLengthMessage =
  control.validation?.minLength?.message;

const validationTextInputMaxLengthMessage =
  control.validation?.maxLength?.message;

const validationPasswordInputMinLengthMessage =
  control.validation?.minLength?.message;

const validationEmailInputPatternMessage = control.validation?.pattern?.message;

const isTextInputValidationMessageVisible = computed(
  () => control.type === "text" && isFirstTouched.value && !modelIsValid.value
);

const isPasswordInputValidationMessageVisible = computed(
  () =>
    control.type === "password" && isFirstTouched.value && !modelIsValid.value
);

const isEmailInputValidationMessageVisible = computed(
  () => control.type === "email" && isFirstTouched.value && !modelIsValid.value
);

const inputCssClasses = computed(() => [
  styles.input,
  { [styles.errorInput]: !modelIsValid.value && isFirstTouched.value },
]);

if (validation || isRequired) {
  watch(debouncedModelValue, () => {
    if (!isFirstTouched.value) {
      isFirstTouched.value = true;
    }

    if (validation) {
      validateInput({
        validation,
        modelValue,
        modelIsValid,
      });
    }

    if (isRequired && !validation) {
      modelIsValid.value = modelValue.value.length > 0;
    }

    console.log("input data", modelValue.value);
    console.log("modelIsValid data", modelIsValid.value);
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
      v-model.trim="modelValue"
    />
    <div :class="styles.helpMessage" v-if="control.helpMessage">
      {{ control.helpMessage }}
    </div>
    <div v-if="validation">
      <span
        :class="styles.errorMessage"
        v-if="isTextInputValidationMessageVisible"
      >
        {{ validationTextInputMinLengthMessage }}.
        {{ validationTextInputMaxLengthMessage }}
      </span>
      <span
        :class="styles.errorMessage"
        v-else-if="isPasswordInputValidationMessageVisible"
      >
        {{ validationPasswordInputMinLengthMessage }}
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
