<script lang="ts" setup>
import { watch, useId, ref } from "vue";
import styles from "@/components/GeneratedFormControlCheckbox/GeneratedFormControlCheckbox.module.scss";
import type { IGeneratedFormControlCheckboxProps } from "@/components/GeneratedFormControlCheckbox/GeneratedFormControlCheckbox.types";

const { control } = defineProps<IGeneratedFormControlCheckboxProps>();

const modelIsValid = defineModel<boolean>("isValid", { required: true });

const checkboxValue = ref(false);
const id = useId();
const label = control.label;
const type = control.type;
const name = control.name;
const isChecked = control.checked;
const isRequired = control.required;
const helpMessage = control.helpMessage;

if (isChecked) {
  checkboxValue.value = true;
}

if (isRequired) {
  watch(
    checkboxValue,
    () => {
      modelIsValid.value = checkboxValue.value;
    },
    { immediate: true }
  );
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
      v-model="checkboxValue"
    />
    <div v-if="isRequired">
      <span :class="styles.helpMessage">
        {{ helpMessage }}
      </span>
    </div>
  </div>
</template>
