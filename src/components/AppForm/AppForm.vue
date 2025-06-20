<script lang="ts" setup>
import { useId } from "vue";
import AppFormControl from "@/components/AppFormControl/AppFormControl.vue";

// defineProps<IAppFormProps>();

const FORM_CONTROLS = [
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
  {
    label: "Отправить форму",
    type: "submit",
  },
];

const submitForm = () => {};
</script>

<template>
  <form :class="styles.form" @submit.prevent="submitForm">
    <AppFormControl
      v-for="control in FORM_CONTROLS"
      :control="control"
      :key="useId()"
    />
  </form>
</template>

<style lang="scss" module="styles">
@use "@/assets/styles/vars.scss";

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid vars.$color-secondary;
  border-radius: vars.$rounding;
  box-shadow: 4px 4px 8px 0px rgba(vars.$color-dark, 0.2);
}
</style>
