<script lang="ts" setup>
import { watch, useId } from "vue";
import styles from "@/components/GeneratedFormControlCheckbox/GeneratedFormControlCheckbox.module.scss";
import type { IGeneratedFormControlCheckboxProps } from "@/components/GeneratedFormControlCheckbox/GeneratedFormControlCheckbox.types";

const { control } = defineProps<IGeneratedFormControlCheckboxProps>();

const modelValue = defineModel<boolean>("data", { required: true });
const modelIsValid = defineModel<boolean>("isValid", { required: true });

const id = useId();
const label = control.label;
const type = control.type;
const name = control.name;
const isChecked = control.checked;
const isRequired = control.required;
const helpMessage = control.helpMessage;

if (isChecked) {
  modelValue.value = true;
}

if (isRequired) {
  watch(modelValue, () => {
    modelIsValid.value = modelValue.value;
  });
}
</script>

<template>
  <div :class="styles.wrapper">
    <label :for="id"> {{ label }} <span v-if="isRequired">*</span> </label>
    <input
      :id="id"
      :class="styles.input"
      :type="type"
      :name="name"
      v-model="modelValue"
    />
    <div v-if="isRequired">
      <span :class="styles.helpMessage">
        {{ helpMessage }}
      </span>
    </div>
  </div>
</template>
