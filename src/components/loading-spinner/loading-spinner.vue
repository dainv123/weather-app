<template>
  <div class="loading-spinner">
    <div class="spinner"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class LoadingSpinner extends Vue {}
</script>

<style lang="scss" scoped src="./loading-spinner.scss"></style>
