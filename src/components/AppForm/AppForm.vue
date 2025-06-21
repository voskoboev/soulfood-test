<script lang="ts" setup>
import { ref, useId } from "vue";
import { useAuthStore } from "@/stores/auth.store";
import AppFormControl from "@/components/AppFormControl/AppFormControl.vue";
import styles from "@/components/AppForm/AppForm.module.scss";
import type { TFormControl } from "@/types/TFormControl.types";
// import { watchEffect } from "vue";

const FORM_CONTROLS: TFormControl[] = [
  {
    type: "text",
    label: "Имя",
    required: true,
    validation: {
      minLength: {
        value: 3,
        message: `Минимальное количество символов 3`,
      },
      maxLength: {
        value: 255,
        message: "Максимальное количество символов 255",
      },
    },
  },
  {
    type: "email",
    label: "Email",
    required: false,
    validation: null,
  },
  {
    type: "password",
    label: "Пароль",
    required: true,
    validation: {
      minLength: {
        value: 6,
        message: "Минимальное количество символов 6",
      },
    },
  },
  {
    label: "Роль",
    type: "select",
    options: [
      {
        text: "Пользователь",
        value: "user",
      },
      {
        text: "Администратор",
        value: "admin",
      },
    ],
    defaultValue: null,
    required: true,
    validation: {
      message: "Выберите одно из значений",
    },
  },
  {
    label: "Согласие с политикой конфиденциальности",
    type: "checkbox",
    name: "privacy",
    checked: true,
    validation: {
      message:
        "Регистрация возможна при согласии с политикой конфиденциальности",
    },
  },
];

const authStore = useAuthStore();

const isSubmitButtonDisabled = ref(false);

// watchEffect(() => {
//   isSubmitButtonDisabled.value
// })

const handleOnSubmit = () => {
  const newUser = {};

  authStore.handleRegisterUser(newUser);
};
</script>

<template>
  <form :class="styles.form" @submit.prevent="handleOnSubmit" novalidate>
    <AppFormControl
      v-for="control in FORM_CONTROLS"
      :control="control"
      :key="useId()"
    />
    <AppButton type="submit" :disabled="isSubmitButtonDisabled">
      Отправить форму
    </AppButton>
  </form>
</template>
