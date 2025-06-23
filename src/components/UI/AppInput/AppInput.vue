<script lang="ts" setup>
import { ref, computed, watch, useId } from "vue";
import { useDebounce } from "@vueuse/core";
import styles from "@/components/UI/AppInput/AppInput.module.scss";
import { DEBOUNCE_DELAY } from "@/components/UI/AppInput/AppInput.data";
import { useValidation } from "@/composables/useValidation/useValidation.composable";
import type { ModelRef } from "vue";
import type { IAppInputProps } from "@/components/UI/AppInput/AppInput.types";

const { control } = defineProps<IAppInputProps>();

const modelValue = defineModel<string>("data");
const modelIsValid = defineModel<boolean>("isValid");

const { validateInput } = useValidation();
const id = useId();

const isFirstTouched = ref(false);
const debouncedModelValue = useDebounce(modelValue, DEBOUNCE_DELAY);

const label = control.label;
const validation = control.validation;

const validationTextInputMinLengthMessage =
  control.validation?.minLength?.message;

const validationTextInputMaxLengthMessage =
  control.validation?.maxLength?.message;

const validationPasswordInputMinLengthMessage =
  control.validation?.minLength?.message;

const isTextInput = computed(() => control.type === "text");
const isEmailInput = computed(() => control.type === "email");
const isPasswordInput = computed(() => control.type === "password");

const inputCssClasses = computed(() => [
  styles.input,
  { [styles.errorInput]: !modelIsValid.value && isFirstTouched.value },
]);

if (validation) {
  watch(debouncedModelValue, () => {
    if (!isFirstTouched.value) {
      isFirstTouched.value = true;
    }

    validateInput({
      validation,
      modelValue: modelValue as ModelRef<string>,
      modelIsValid: modelIsValid as ModelRef<boolean>,
    });

    console.log("input data", modelValue.value);
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
      :class="inputCssClasses"
      :type="control.type"
      v-model.trim="modelValue"
    />
    <div v-if="validation">
      <span
        :class="styles.errorMessage"
        v-if="isFirstTouched && isTextInput && !modelIsValid"
      >
        {{ validationTextInputMinLengthMessage }}.
        {{ validationTextInputMaxLengthMessage }}
      </span>
      <span
        :class="styles.errorMessage"
        v-else-if="isEmailInput && !modelIsValid"
      >
        {{ control.validation?.pattern?.message }}
      </span>
      <span
        :class="styles.errorMessage"
        v-else-if="isPasswordInput && !modelIsValid"
      >
        {{ validationPasswordInputMinLengthMessage }}
      </span>
    </div>
  </div>
</template>
