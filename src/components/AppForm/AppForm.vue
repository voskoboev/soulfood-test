<script lang="ts" setup>
import { ref, computed, useTemplateRef, watchEffect } from "vue";
import AppFormControl from "@/components/AppFormControl/AppFormControl.vue";
import styles from "@/components/AppForm/AppForm.module.scss";
import type { IAppFormProps } from "@/components/AppForm/AppForm.types";
import type { TFormControlReactive } from "@/types/TFormControlReactive.types";

const { controls, getFormData } = defineProps<IAppFormProps>();

const form = useTemplateRef("form");

const reactiveControls: TFormControlReactive[] = controls.map(
  (control, idx) => ({
    ...control,
    id: idx,
    data: ref(""),
    isValid: control.validation || control.required ? ref(false) : ref(true),
  })
);

const isSubmitButtonDisabled = ref(true);

const isRequired = computed(() =>
  reactiveControls.some((control) => control.required)
);

console.log("reactiveControls", reactiveControls);

watchEffect(() => {
  isSubmitButtonDisabled.value = !reactiveControls.every(
    (control) => control.isValid.value
  );
});

const handleSubmitForm = () => {
  if (!form.value) {
    throw new Error("Form template ref is missing.");
  }

  const formData = new FormData(form.value);
  const data = Object.fromEntries(formData.entries());
  getFormData(data);
};
</script>

<template>
  <form
    novalidate
    :class="styles.form"
    @submit.prevent="handleSubmitForm"
    ref="form"
  >
    <AppFormControl
      v-for="control in reactiveControls"
      :control="control"
      :key="control.id"
      v-model:data="control.data.value"
      v-model:is-valid="control.isValid.value"
    />
    <AppButton type="submit" :disabled="isSubmitButtonDisabled">
      Отправить форму
    </AppButton>
    <div v-if="isRequired">Поля со * обазятельны к заполнению</div>
  </form>
</template>
