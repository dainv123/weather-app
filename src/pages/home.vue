<template>
  <div class="home">
    <h1>Vue Weather App - Real-Time Weather Information</h1>
    <WeatherComponent />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";
import WeatherComponent from "@/components/weather-component/weather-component.vue";

@Component({
  name: "Home",
  components: {
    WeatherComponent,
  },
})
export default class Home extends Vue {}
</script>
