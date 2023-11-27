import { locations } from "./travel_data.js";

const locationContainer = document.querySelector(".locationContainer");

locations.forEach((location) => {
  const locationBox = document.createElement("div");
  const countryText = document.createElement("div");
  const regionText = document.createElement("div"); // 추가됨
  locationBox.classList.add("locationBox");
  countryText.classList.add("countryText");
  regionText.classList.add("regionText"); // 추가됨
  locationBox.style.backgroundImage = `url(${location.url})`;
  countryText.innerText = `${location.country}`;
  regionText.innerText = `${location.region}`; // 추가됨
  locationBox.appendChild(countryText);
  locationBox.appendChild(regionText); // 추가됨
  locationContainer.appendChild(locationBox);
});
