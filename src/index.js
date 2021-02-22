// function sendMsg() {
//   let xhr = new XMLHttpRequest();
//   xhr.open(
//     "get",
//     "https://devapi.qweather.com/v7/weather/now?location=101290116&key=7e3a22824fc74b4bb1fcde68d101f195&lang=en"
//   );
//   xhr.send();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       let resp_json = JSON.parse(this.responseText);
//       console.log(resp_json);
//       document.querySelector("#preloader").innerHTML = `
//         <p>${resp_json.now.text}</p>
//       `;
//     }
//   };
// }

var app = new Vue({
  el: "#preloader",
  data: {
    preloader: "Hello World!",
  },
  methods: {
    get_current_weather: function () {
      var that = this;
      axios
        .get(
          "https://devapi.qweather.com/v7/weather/now?location=101290116&key=7e3a22824fc74b4bb1fcde68d101f195&lang=en"
        )
        .then(
          function (response) {
            that.preloader = response.data.now.text;
          },
          function (err) {}
        );
    },
  },
});
