<script lang="ts" setup>
import styles from "@/components/UI/AppButton/AppButton.module.scss";
</script>

<template>
  <button :class="styles.button">
    <slot />
  </button>
</template>
