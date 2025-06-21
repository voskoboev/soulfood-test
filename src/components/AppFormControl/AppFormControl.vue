<script lang="ts" setup>
import { computed } from "vue";
import type { IAppFormControlProps } from "@/components/AppFormControl/AppFormControl.types";

const props = defineProps<IAppFormControlProps>();

const isTextInput = computed(() => props.control.type === "text");
const isEmailInput = computed(() => props.control.type === "email");
const isPasswordInput = computed(() => props.control.type === "password");
const isSelect = computed(() => props.control.type === "select");
const isCheckbox = computed(() => props.control.type === "checkbox");
const isSubmitButton = computed(() => props.control.type === "submit");
</script>

<template>
  <AppInput v-if="isTextInput" :control="props.control" />
  <AppInput v-else-if="isEmailInput" :control="props.control" />
  <AppInput v-else-if="isPasswordInput" :control="props.control" />
  <AppSelect v-else-if="isSelect" :control="props.control" />
  <AppCheckbox v-else-if="isCheckbox" :control="props.control" />
  <AppButton v-else-if="isSubmitButton" :control="props.control" />
</template>
