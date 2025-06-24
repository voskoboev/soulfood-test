<script lang="ts" setup>
import { ref, computed, watch, useId } from "vue";
import { useDebounce } from "@vueuse/core";
import styles from "@/components/UI/AppInput/AppInput.module.scss";
import { DEBOUNCE_DELAY } from "@/components/UI/AppInput/AppInput.data";
import { useValidation } from "@/composables/useValidation/useValidation.composable";
import type { IAppInputProps } from "@/components/UI/AppInput/AppInput.types";

const { control } = defineProps<IAppInputProps>();

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

// const pattern = control.validation?.pattern?.value;

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
        v-if="isFirstTouched && isTextInput && !modelIsValid"
      >
        {{ validationTextInputMinLengthMessage }}.
        {{ validationTextInputMaxLengthMessage }}
      </span>
      <span
        :class="styles.errorMessage"
        v-else-if="isFirstTouched && isPasswordInput && !modelIsValid"
      >
        {{ validationPasswordInputMinLengthMessage }}
      </span>
      <span
        :class="styles.errorMessage"
        v-else-if="isFirstTouched && isEmailInput && !modelIsValid"
      >
        {{ control.validation?.pattern?.message }}
      </span>
    </div>
  </div>
</template>
