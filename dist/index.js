"use strict";

function sendMsg() {
  var xhr = new XMLHttpRequest();
  xhr.open("get", "https://devapi.qweather.com/v7/weather/now?location=101290116&key=7e3a22824fc74b4bb1fcde68d101f195&lang=en");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var resp_json = JSON.parse(this.responseText);
      console.log(resp_json);
    }
  };
}
