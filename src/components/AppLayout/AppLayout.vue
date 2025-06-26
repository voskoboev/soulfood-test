<script lang="ts" setup>
import GeneratedForm from "@/components/GeneratedForm/GeneratedForm.vue";
import styles from "@/components/AppLayout/AppLayout.module.scss";
import { useAuthStore } from "@/stores/auth.store";
import type { TGeneratedFormControl } from "@/types/TGeneratedFormControl.types";

const FORM_CONTROLS: TGeneratedFormControl[] = [
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
    type: "text",
    label: "Имя",
    name: "first-name",
    required: true,
  },

  {
    type: "text",
    label: "Фамилия",
    name: "last-name",
    required: false,
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
    required: true,
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
    required: true,
    helpMessage: "Выберите одно из значений",
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
    <GeneratedForm
      :controls="FORM_CONTROLS"
      :get-form-data="authStore.handleRegisterUser"
    />
  </div>
</template>
