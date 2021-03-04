<template>
  <div id="weatherApp">
    <button @click="getCurrentWeather">现在天气</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "weatherApp",
  methods: {
    getCurrentWeather: function() {
      axios
        .get("https://devapi.qweather.com/v7/weather/now", {
          params: {
            location: 101290116,
            key: "7e3a22824fc74b4bb1fcde68d101f195",
            lang: "en"
          }
        })
        .then(response => console.log(response.data.now.text));
    }
  }
};
</script>
