// List of cities
const cities = [
    { name: "Paris, France", image: "https://www.pexels.com/@chris-molloy-220084/", description: "Paris is known as the city of love, with the iconic Eiffel Tower." },
    { name: "New York, USA", image: "https://www.pexels.com/photo/empire-state-building-new-york-466685/", description: "New York is a vibrant city, home to Times Square and Central Park." },
    { name: "Tokyo, Japan", image: "https://www.pexels.com/photo/illuminated-tower-2614818/", description: "Tokyo blends modern skyscrapers with historic temples." },
    { name: "Venice, Italy", image: "https://www.pexels.com/photo/photo-of-man-riding-canoe-1144265/", description: "Venice is famous for its canals and romantic gondola rides." }
];

let currentIndex = 0;

// Function to change city details
function changeCity() {
    currentIndex = (currentIndex + 1) % cities.length;
    document.getElementById("city-title").textContent = cities[currentIndex].name;
    document.getElementById("city-description").textContent = cities[currentIndex].description;
    document.getElementById("city-image").src = cities[currentIndex].image;
}

// Function to add a city to the list
function addCity() {
    const cityList = document.getElementById("city-list");
    const newCity = document.createElement("li");
    newCity.textContent = "Sydney, Australia";
    cityList.appendChild(newCity);
}

// Function to remove the last city from the list
function removeCity() {
    const cityList = document.getElementById("city-list");
    if (cityList.children.length > 0) {
        cityList.removeChild(cityList.lastChild);
    }
}
