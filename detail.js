const urlParams = new URLSearchParams(window.location.search);
const locationName = urlParams.get("location");

const location = locations.find((loc) => loc.region === locationName);

document.querySelector(".locationName").textContent = location.region;
document.querySelector(".locationImage").src = location.image;
// ... 나머지 정보들도 이와 같은 방식으로 설정
