<template>
  <div class="weather-app">
    <SearchInput @search="getWeather" />
    <LoadingSpinner v-if="loading" />
    <ErrorMessage v-if="error" :message="error" />
    <WeatherInfo v-if="weather" :weather="weather" :units="units" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SearchInput from "../search-input/search-input.vue";
import WeatherInfo from "../weather-info/weather-info.vue";
import LoadingSpinner from "../loading-spinner/loading-spinner.vue";
import ErrorMessage from "../error-message/error-message.vue";
import { fetchWeather } from "@/services/weather-service";
import { Units } from "@/models/unit";
import { message } from "@/message";

@Component({
  components: {
    SearchInput,
    WeatherInfo,
    LoadingSpinner,
    ErrorMessage,
  },
})
export default class WeatherComponent extends Vue {
  public weather: any = null;
  public loading: boolean = false;
  public error: string = "";
  public units: Units = "metric";

  public async getWeather(city: string) {
    this.loading = true;
    this.error = "";

    try {
      await this.determineUnits();
      this.weather = await fetchWeather(city, this.units);
    } catch (e) {
      this.error = message.fetchWeatherFailed;
    } finally {
      this.loading = false;
    }
  }

  private async determineUnits() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.units = this.isUSLocation(latitude, longitude)
            ? "imperial"
            : "metric";
        },
        (error) => {
          console.error(error);
          this.units = "metric";
        }
      );
    }
  }

  private isUSLocation(lat: number, lon: number): boolean {
    return (
      lat >= 24.396308 && lat <= 49.384358 && lon >= -125.0 && lon <= -66.93457
    );
  }
}
</script>

<style lang="scss" scoped src="./weather-component.scss"></style>
