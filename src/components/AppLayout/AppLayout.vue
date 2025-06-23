<script lang="ts" setup>
import AppForm from "@/components/AppForm/AppForm.vue";
import styles from "@/components/AppLayout/AppLayout.module.scss";
import { useAuthStore } from "@/stores/auth.store";
import type { TFormControl } from "@/types/TFormControl.types";

const FORM_CONTROLS: TFormControl[] = [
  {
    type: "text",
    label: "Имя",
    helpMessage:
      "Минимальное количество символов 3. Максимальное количество символов 255",
    required: true,
    validation: {
      minLength: {
        value: 3,
        message: `Ошибка. Введите минимальное значение 3`,
      },
      maxLength: {
        value: 255,
        message: "Ошибка. Введите минимальное значение 255",
      },
    },
  },
  // {
  //   type: "email",
  //   label: "Email",
  //   required: false,
  //   // validation: null,
  // },
  // {
  //   type: "email",
  //   label: "Email",
  //   required: false,
  //   validation: {
  //     pattern: {
  //       value:
  //         "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+))",
  //       message: "Введите корректное значение email",
  //     },
  //   },
  // },
  // {
  //   type: "password",
  //   label: "Пароль",
  //   required: true,
  //   validation: {
  //     minLength: {
  //       value: 6,
  //       message: "Минимальное количество символов 6",
  //     },
  //   },
  // },
  // {
  //   label: "Роль",
  //   type: "select",
  //   options: [
  //     {
  //       text: "Пользователь",
  //       value: "user",
  //     },
  //     {
  //       text: "Администратор",
  //       value: "admin",
  //     },
  //   ],
  //   required: true,
  //   validation: {
  //     message: "Выберите одно из значений",
  //   },
  // },
  // {
  //   label: "Согласие с политикой конфиденциальности",
  //   type: "checkbox",
  //   name: "privacy",
  //   checked: true,
  //   validation: {
  //     message:
  //       "Регистрация возможна при согласии с политикой конфиденциальности",
  //   },
  // },
];

const authStore = useAuthStore();
</script>

<template>
  <div class="container" :class="styles.layout">
    <AppForm
      :controls="FORM_CONTROLS"
      :registerUser="authStore.handleRegisterUser"
    />
  </div>
</template>
