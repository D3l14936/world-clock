function showDate(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");
    let currentTimeElement = document.querySelector("#current-time");
    currentTimeElement.innerHTML = `It is ${currentTime} in ${event.target.value}`;
  }
}

let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", showDate);
