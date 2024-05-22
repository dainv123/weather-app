<template>
  <div class="search-input">
    <input
      v-model="city"
      type="text"
      placeholder="Enter city name"
      @keyup.enter="search"
    />
    <button @click="search">Search</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class SearchInput extends Vue {
  public city: string = "";
  public search() {
    this.$emit("search", this.city);
  }
}
</script>

<style lang="scss" scoped src="./search-input.scss"></style>
