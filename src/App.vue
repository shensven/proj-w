<template>
  <div id="app">
    <HelloWorld />
    <button @click="getCurrentWeather">现在天气</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import axios from "axios";

export default {
  name: "App",
  components: {
    HelloWorld
  },
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
        .then(response => console.log(response));
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
