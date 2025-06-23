<script lang="ts" setup>
import { useId } from "vue";
import styles from "@/components/UI/AppCheckbox/AppCheckbox.module.scss";
import type { IAppCheckboxProps } from "./AppCheckbox.types";

const { control } = defineProps<IAppCheckboxProps>();

const id = useId();

const label = control.label;
const type = control.type;
const isChecked = control.checked;
const hasValidation = control.validation;
const validationMessage = control.validation?.message;
</script>

<template>
  <div :class="styles.wrapper">
    <label :for="id">
      {{ label }}
    </label>
    <input :id="id" :class="styles.input" :type="type" :checked="isChecked" />
    <div :class="styles.errorMessage" v-if="hasValidation">
      {{ validationMessage }}
    </div>
  </div>
</template>
