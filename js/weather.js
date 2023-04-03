const API_KEY = "5c0b76406f8d66cd4e41f26043ee6ddd";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url).then((response) => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].description} ${data.main.temp}°C`;
    });
}

function onGeoError() {
    alert("can't geo");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);