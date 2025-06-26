<script lang="ts" setup>
import { watch, useId, ref } from "vue";
import styles from "@/components/GeneratedFormControlSelect/GeneratedFormControlSelect.module.scss";
import type { IGeneratedFormControlSelectProps } from "@/components/GeneratedFormControlSelect/GeneratedFormControlSelect.types";

const { control } = defineProps<IGeneratedFormControlSelectProps>();

const modelIsValid = defineModel<boolean>("isValid", { required: true });

const selectValue = ref("");
const id = useId();
const label = control.label;
const name = control.name;
const helpMessage = control.helpMessage;
const isRequired = control.required;
const options = control.options;

if (isRequired) {
  watch(selectValue, () => {
    modelIsValid.value = !!selectValue.value;
  });
}
</script>

<template>
  <div :class="styles.wrapper">
    <label :for="id"> {{ label }} <span v-if="isRequired">*</span> </label>
    <select :id="id" :class="styles.select" :name="name" v-model="selectValue">
      <option value="" :class="styles.placeholderOption">
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
