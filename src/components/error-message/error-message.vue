<template>
  <div class="error-message">
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class ErrorMessage extends Vue {
  @Prop({ required: true }) public message!: string;
}
</script>

<style lang="scss" scoped src="./error-message.scss"></style>
