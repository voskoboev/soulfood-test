<script lang="ts" setup>
import { useId } from "vue";
import styles from "@/components/UI/AppSelect/AppSelect.module.scss";
import type { IAppSelectProps } from "./AppSelect.types";

const props = defineProps<IAppSelectProps>();

const id = useId();
const label = props.control.label;
const options = props.control.options;
const hasValidation = props.control.validation;
const validationMessage = props.control.validation?.message;

</script>

<template>
  <div :class="styles.wrapper">
    <label :for="id">
      {{ label }}
    </label>
    <select :id="id" :class="styles.select">
      <option :class="styles.placeholderOption" value="">
        Выберите значение из списка
      </option>
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <div v-if="hasValidation">
      <span :class="styles.errorMessage">
        {{ validationMessage }}
      </span>
    </div>
  </div>
</template>
