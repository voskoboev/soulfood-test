<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import AppFormControl from "@/components/AppFormControl/AppFormControl.vue";
import styles from "@/components/AppForm/AppForm.module.scss";
import type { IAppFormProps } from "@/components/AppForm/AppForm.types";
import type { TFormControlReactive } from "@/types/TFormControlReactive.types";

const { controls, registerUser } = defineProps<IAppFormProps>();

const controlsReactive: TFormControlReactive[] = controls.map(
  (control, idx) => ({
    ...control,
    id: idx,
    data: ref(""),
    isValid: control.validation ? ref(false) : ref(true),
  })
);

const isSubmitButtonDisabled = ref(true);

console.log("controlsReactive", controlsReactive);

watchEffect(() => {
  isSubmitButtonDisabled.value = !controlsReactive.every(
    (control) => control.isValid.value
  );
});

const handleRegisterUser = () => {
  const newUser = {
    name: "",
    email: "",
    password: "",
    role: "",
    privacyPolicy: true,
  };

  registerUser(newUser);
};
</script>

<template>
  <form
    novalidate
    ref="form"
    :class="styles.form"
    @submit.prevent="handleRegisterUser"
  >
    <AppFormControl
      v-for="control in controlsReactive"
      :control="control"
      :key="control.id"
      v-model:data="control.data.value"
      v-model:is-valid="control.isValid.value"
    />
    <AppButton type="submit" :disabled="isSubmitButtonDisabled">
      Отправить форму
    </AppButton>
  </form>
</template>
