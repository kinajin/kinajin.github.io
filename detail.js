import { locations } from "./travel_data.js";

const urlParams = new URLSearchParams(window.location.search);
const locationName = urlParams.get("location");
const location = locations.find((loc) => loc.region === locationName);

document.querySelector(".locationName").textContent = location.region;
document.querySelector(".locationCountry").textContent = location.country;
document.querySelector(".locationImage").src = `../${location.image}`;

document.querySelector(".mapFrame").src = location.map;
