<script lang="ts" setup>
import AppForm from "@/components/AppForm/AppForm.vue";
</script>

<template>
  <div class="container" :class="styles.layout">
    <AppForm />
  </div>
</template>

<style lang="scss" module="styles">
@use "@/assets/styles/vars.scss";

.layout {
  margin-top: 20px;
}
</style>
