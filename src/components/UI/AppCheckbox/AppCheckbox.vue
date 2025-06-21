<script lang="ts" setup>
import { useId } from "vue";
import styles from "@/components/UI/AppCheckbox/AppCheckbox.module.scss";
import type { IAppCheckboxProps } from "./AppCheckbox.types";

const props = defineProps<IAppCheckboxProps>();

const id = useId();

const label = props.control.label;
const type = props.control.type;
const isChecked = props.control.checked;
const hasValidation = props.control.validation;
const validationMessage = props.control.validation?.message;
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
