import { locations } from "./travel_data.js";

const locationContainer = document.querySelector(".locationContainer");

locations.forEach((location) => {
  const locationBox = document.createElement("div");
  const countryText = document.createElement("div");
  const regionText = document.createElement("div");

  locationBox.classList.add("locationBox");
  countryText.classList.add("countryText");
  regionText.classList.add("regionText");

  locationBox.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${location.image})`;
  countryText.innerText = `${location.country}`;
  regionText.innerText = `${location.region}`;

  locationBox.appendChild(countryText);
  locationBox.appendChild(regionText);
  locationContainer.appendChild(locationBox);

  locationBox.addEventListener("click", () => {
    window.location.href = location.link;
  });
});
