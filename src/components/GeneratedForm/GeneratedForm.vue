<script lang="ts" setup>
import { ref, computed, useTemplateRef, watchEffect } from "vue";
import GeneratedFormControl from "@/components/GeneratedFormControl/GeneratedFormControl.vue";
import styles from "@/components/GeneratedForm/GeneratedForm.module.scss";
import type { IGeneratedFormProps } from "@/components/GeneratedForm/GeneratedForm.types";
import type { TGeneratedFormControlReactive } from "@/types/TGeneratedFormControlReactive.types";

const { controls, getFormData } = defineProps<IGeneratedFormProps>();

const form = useTemplateRef("form");

const reactiveControls: TGeneratedFormControlReactive[] = controls.map(
  (control) => ({
    ...control,
    isValid:
      "validation" in control || control.required ? ref(false) : ref(true),
  })
);

const isSubmitButtonDisabled = ref(true);

const isRequired = computed(() =>
  reactiveControls.some((control) => control.required)
);

watchEffect(() => {
  isSubmitButtonDisabled.value = !reactiveControls.every(
    (control) => control.isValid.value
  );
});

const handleSubmitForm = () => {
  const formData = new FormData(form.value!);
  const data = Object.fromEntries(formData.entries());
  getFormData(data);
};
</script>

<template>
  <form
    novalidate
    ref="form"
    :class="styles.form"
    @submit.prevent="handleSubmitForm"
  >
    <GeneratedFormControl
      v-for="(control, idx) in reactiveControls"
      :control="control"
      :key="idx"
      v-model:is-valid="control.isValid.value"
    />
    <AppButton type="submit" :disabled="isSubmitButtonDisabled">
      Отправить форму
    </AppButton>
    <div v-if="isRequired">Поля со * обязательны к заполнению</div>
  </form>
</template>
