import { locations } from "./travel_data.js";

const locationContainer = document.querySelector(".locationContainer");

const newestButton = document.querySelector(".sort button:first-child");
const oldestButton = document.querySelector(".sort button:last-child");

function renderLocations(locations) {
  locationContainer.innerHTML = ""; // 기존에 그려진 박스들을 초기화합니다.

  locations.forEach((location) => {
    const locationBox = document.createElement("div");

    const countryText = document.createElement("div");
    const regionText = document.createElement("div");
    const dateText = document.createElement("div");

    locationBox.classList.add("locationBox");
    countryText.classList.add("countryText");
    regionText.classList.add("regionText");
    dateText.classList.add("dateText");

    locationBox.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${location.image})`;
    countryText.innerText = `${location.country}`;
    regionText.innerText = `${location.region}`;

    //

    const visitDate = new Date(location.date);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const formattedDate = `${
      monthNames[visitDate.getMonth()]
    } ${visitDate.getDate()}, ${visitDate.getFullYear()}`;

    dateText.innerText = `${formattedDate}`;
    //

    //   dateText.innerText = `${location.date}`;

    locationBox.appendChild(countryText);
    locationBox.appendChild(regionText);
    locationBox.appendChild(dateText);
    locationContainer.appendChild(locationBox);

    locationBox.addEventListener("click", () => {
      window.location.href = location.link;
    });
  });
}

newestButton.addEventListener("click", () => {
  const sortedLocations = [...locations].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  ); // 최신순으로 정렬
  renderLocations(sortedLocations);
});

oldestButton.addEventListener("click", () => {
  const sortedLocations = [...locations].sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  ); // 오래된 순으로 정렬
  renderLocations(sortedLocations);
});

newestButton.click();
