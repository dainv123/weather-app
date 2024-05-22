<template>
  <div class="weather-info">
    <h2 class="city-name">{{ weather.name }}</h2>
    <p class="temperature">
      {{ weather.main.temp }}°{{ units === "metric" ? "C" : "F" }}
    </p>
    <p class="description">{{ weather.weather[0].description }}</p>
    <img
      class="icon"
      :src="`${iconUrl}${weather.weather[0].icon}@2x.png`"
      alt="Weather icon"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { config } from "@/config";
import { Units } from "@/models/unit";

@Component
export default class WeatherInfo extends Vue {
  @Prop({ required: true }) public weather!: any;
  @Prop({ required: true }) public units!: Units;
  public iconUrl: string = config.iconUrl;
}
</script>

<style lang="scss" scoped src="./weather-info.scss"></style>
