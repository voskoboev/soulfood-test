<script lang="ts" setup>
import { computed } from "vue";
import type { IAppFormControlProps } from "@/components/AppFormControl/AppFormControl.types";

const { control } = defineProps<IAppFormControlProps>();

const modelValue = defineModel<string>("data");
const modelIsValid = defineModel<boolean>("isValid");

const isTextInput = computed(() => control.type === "text");
const isEmailInput = computed(() => control.type === "email");
const isPasswordInput = computed(() => control.type === "password");
const isSelect = computed(() => control.type === "select");
const isCheckbox = computed(() => control.type === "checkbox");
</script>

<template>
  <AppInput
    v-if="isTextInput"
    :control="control"
    v-model:data="modelValue"
    v-model:is-valid="modelIsValid"
  />
  <AppInput
    v-else-if="isEmailInput"
    :control="control"
    v-model:data="modelValue"
    v-model:is-valid="modelIsValid"
  />
  <AppInput
    v-else-if="isPasswordInput"
    :control="control"
    v-model:data="modelValue"
    v-model:is-valid="modelIsValid"
  />
  <AppSelect
    v-else-if="isSelect"
    :control="control"
    v-model:data="modelValue"
    v-model:is-valid="modelIsValid"
  />
  <AppCheckbox
    v-else-if="isCheckbox"
    :control="control"
    v-model:data="modelValue"
    v-model:is-valid="modelIsValid"
  />
</template>
