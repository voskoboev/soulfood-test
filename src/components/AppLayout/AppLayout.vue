<script lang="ts" setup>
import AppForm from "@/components/AppForm/AppForm.vue";
import styles from "@/components/AppLayout/AppLayout.module.scss";
</script>

<template>
  <div class="container" :class="styles.layout">
    <AppForm />
  </div>
</template>
