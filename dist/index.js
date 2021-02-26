"use strict";

var app = new Vue({
  el: "#preloader",
  data: {
    preloader: "Hello World!"
  },
  methods: {
    get_current_weather: function get_current_weather() {
      var that = this;
      axios.get("https://devapi.qweather.com/v7/weather/now?location=101290116&key=7e3a22824fc74b4bb1fcde68d101f195&lang=en").then(function (response) {
        that.preloader = response.data.now.text;
      }, function (err) {});
    }
  }
});
