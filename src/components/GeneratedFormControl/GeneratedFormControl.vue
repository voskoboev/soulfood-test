<script lang="ts" setup>
import { computed } from "vue";
import GeneratedFormControlInput from "@/components/GeneratedFormControlInput/GeneratedFormControlInput.vue";
import GeneratedFormControlSelect from "@/components/GeneratedFormControlSelect/GeneratedFormControlSelect.vue";
import GeneratedFormControlCheckbox from "@/components/GeneratedFormControlCheckbox/GeneratedFormControlCheckbox.vue";
import type { IGeneratedFormControlProps } from "@/components/GeneratedFormControl/GeneratedFormControl.types";

const { control } = defineProps<IGeneratedFormControlProps>();

const modelValue = defineModel<string | boolean>("data", { required: true });
const modelIsValid = defineModel<boolean>("isValid", { required: true });

const isTextInput = computed(() => control.type === "text");
const isEmailInput = computed(() => control.type === "email");
const isPasswordInput = computed(() => control.type === "password");
const isSelect = computed(() => control.type === "select");
const isCheckbox = computed(() => control.type === "checkbox");
</script>

<template>
  <GeneratedFormControlInput
    v-if="isTextInput"
    :control="control"
    v-model:data="modelValue"
    v-model:is-valid="modelIsValid"
  />
  <GeneratedFormControlInput
    v-else-if="isEmailInput"
    :control="control"
    v-model:data="modelValue"
    v-model:is-valid="modelIsValid"
  />
  <GeneratedFormControlInput
    v-else-if="isPasswordInput"
    :control="control"
    v-model:data="modelValue"
    v-model:is-valid="modelIsValid"
  />
  <GeneratedFormControlSelect
    v-else-if="isSelect"
    :control="control"
    v-model:data="modelValue"
    v-model:is-valid="modelIsValid"
  />
  <GeneratedFormControlCheckbox
    v-else-if="isCheckbox"
    :control="control"
    v-model:data="modelValue"
    v-model:is-valid="modelIsValid"
  />
</template>
