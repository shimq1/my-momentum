const images = [
    "https://source.unsplash.com/random/1920x1080/?sea",
    "https://source.unsplash.com/random/1920x1080/?space",
    "https://source.unsplash.com/random/1920x1080/?night,sky",
    "https://source.unsplash.com/random/1920x1080/?star",
    "https://source.unsplash.com/random/1920x1080/?sunset",
    "https://source.unsplash.com/random/1920x1080/?mountain",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(${chosenImage})`;