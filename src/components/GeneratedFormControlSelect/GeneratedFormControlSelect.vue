<script lang="ts" setup>
import { watch, useId } from "vue";
import styles from "@/components/GeneratedFormControlSelect/GeneratedFormControlSelect.module.scss";
import type { IGeneratedFormControlSelectProps } from "@/components/GeneratedFormControlSelect/GeneratedFormControlSelect.types";

const { control } = defineProps<IGeneratedFormControlSelectProps>();

const modelValue = defineModel<boolean>("data", { required: true });
const modelIsValid = defineModel<boolean>("isValid", { required: true });

const id = useId();
const label = control.label;
const name = control.name;
const options = control.options;
const isRequired = control.required;
const helpMessage = control.helpMessage;

if (isRequired) {
  watch(modelValue, () => {
    modelIsValid.value = modelValue.value.length > 0;
  });
}
</script>

<template>
  <div :class="styles.wrapper">
    <label :for="id"> {{ label }} <span v-if="isRequired">*</span> </label>
    <select :id="id" :class="styles.select" :name="name" v-model="modelValue">
      <option :class="styles.placeholderOption" value="">
        Выберите значение из списка
      </option>
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <div v-if="isRequired">
      <span :class="styles.helpMessage">
        {{ helpMessage }}
      </span>
    </div>
  </div>
</template>
