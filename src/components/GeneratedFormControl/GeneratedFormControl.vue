<script lang="ts" setup>
import GeneratedFormControlInput from "@/components/GeneratedFormControlInput/GeneratedFormControlInput.vue";
import GeneratedFormControlSelect from "@/components/GeneratedFormControlSelect/GeneratedFormControlSelect.vue";
import GeneratedFormControlCheckbox from "@/components/GeneratedFormControlCheckbox/GeneratedFormControlCheckbox.vue";
import {
  isControlInput,
  isControlSelect,
  isControlCheckbox,
} from "@/components/GeneratedFormControl/GeneratedFormControl.types";
import type { IGeneratedFormControlProps } from "@/components/GeneratedFormControl/GeneratedFormControl.types";

const { control } = defineProps<IGeneratedFormControlProps>();

const modelIsValid = defineModel<boolean>("isValid", { required: true });
</script>

<template>
  <GeneratedFormControlInput
    v-if="isControlInput(control)"
    :control="control"
    v-model:is-valid="modelIsValid"
  />
  <GeneratedFormControlSelect
    v-else-if="isControlSelect(control)"
    :control="control"
    v-model:is-valid="modelIsValid"
  />
  <GeneratedFormControlCheckbox
    v-else-if="isControlCheckbox(control)"
    :control="control"
    v-model:is-valid="modelIsValid"
  />
</template>
