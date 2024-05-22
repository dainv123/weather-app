import { config } from "@/config";
import { shallowMount } from "@vue/test-utils";
import WeatherInfo from "@/components/weather-info/weather-info.vue";
import { WeatherData } from "@/models/weather-data";

describe("WeatherInfo.vue", () => {
  it("renders weather data correctly with metric units", () => {
    const weatherData: WeatherData = {
      name: "New York",
      main: { temp: 20 },
      weather: [{ description: "Cloudy", icon: "cloudy-icon" }],
    };

    const wrapper = shallowMount(WeatherInfo, {
      propsData: { weather: weatherData, units: "metric" },
    });

    expect(wrapper.find(".city-name").text()).toBe("New York");
    expect(wrapper.find(".temperature").text()).toBe("20°C");
    expect(wrapper.find(".description").text()).toBe("Cloudy");
    expect(wrapper.find(".icon").attributes("src")).toBe(
      `${config.iconUrl}cloudy-icon@2x.png`
    );
  });

  it("renders weather data correctly with imperial units", () => {
    const weatherData: WeatherData = {
      name: "New York",
      main: { temp: 68 },
      weather: [{ description: "Cloudy", icon: "cloudy-icon" }],
    };

    const wrapper = shallowMount(WeatherInfo, {
      propsData: { weather: weatherData, units: "imperial" },
    });

    expect(wrapper.find(".city-name").text()).toBe("New York");
    expect(wrapper.find(".temperature").text()).toBe("68°F");
    expect(wrapper.find(".description").text()).toBe("Cloudy");
    expect(wrapper.find(".icon").attributes("src")).toBe(
      `${config.iconUrl}cloudy-icon@2x.png`
    );
  });
});
