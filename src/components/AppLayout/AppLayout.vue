<script lang="ts" setup>
import AppForm from "@/components/AppForm/AppForm.vue";
import styles from "@/components/AppLayout/AppLayout.module.scss";
import { useAuthStore } from "@/stores/auth.store";
import type { TFormControl } from "@/types/TFormControl.types";

const FORM_CONTROLS: TFormControl[] = [
  {
    type: "text",
    label: "Логин",
    name: "login",
    helpMessage:
      "Минимальное количество символов 3. Максимальное количество символов 255",
    required: true,
    validation: {
      minLength: {
        value: 3,
        message: `Ошибка. Минимальное количество символов 3`,
      },
      maxLength: {
        value: 255,
        message: "Ошибка. Максимальное количество символов 255",
      },
    },
  },

  {
    type: "password",
    label: "Пароль",
    name: "password",
    required: true,
    helpMessage: "Минимальное количество символов 6",
    validation: {
      minLength: {
        value: 6,
        message: "Ошибка. Минимальное количество символов 6",
      },
    },
  },

  {
    type: "email",
    label: "Email",
    name: "email",
    required: false,
    validation: {
      pattern: {
        value: "^\\S+@\\S+\\.\\S+$",
        message: "Введите корректное значение email",
      },
    },
  },

  {
    label: "Роль",
    type: "select",
    name: "role",
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
    required: true,
    helpMessage: "Выберите одно из значений",
  },

  {
    label: "Согласие с политикой конфиденциальности",
    type: "checkbox",
    name: "privacy",
    checked: true,
    required: true,
    helpMessage:
      "Регистрация возможна при согласии с политикой конфиденциальности",
  },
];

const authStore = useAuthStore();
</script>

<template>
  <div class="container" :class="styles.layout">
    <AppForm
      :controls="FORM_CONTROLS"
      :get-form-data="authStore.handleRegisterUser"
    />
  </div>
</template>
