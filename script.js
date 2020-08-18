var main = document.getElementById("body"),
  display = document.getElementById("time"),
  hex = document.getElementById("hex"),
  color,
  date,
  sec,
  min,
  hour;

var update = setInterval(function() {
  date = new Date();
  if (date.getSeconds() < 10) {
    sec = "0" + date.getSeconds();
  } else {
    sec = date.getSeconds();
  }
  if (date.getMinutes() < 10) {
    min = "0" + date.getMinutes();
  } else {
    min = date.getMinutes();
  }
  if (date.getHours() < 10) {
    hour = "0" + date.getHours();
  } else {
    hour = date.getHours();
  }
  display.innerHTML = hour + " : " + min + " : " + sec;
  color = "#" + hour + min + sec;
  main.style = "background-color:" + color;
  hex.innerHTML = "#" + hour + min + sec;
}, 1000);