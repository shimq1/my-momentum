const images = [
    "https://source.unsplash.com/random/?sea",
    "https://source.unsplash.com/random/?space",
    "https://source.unsplash.com/random/?night,sky",
    "https://source.unsplash.com/random/?star",
    "https://source.unsplash.com/random/?sunset",
    "https://source.unsplash.com/random/?mountain",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(${chosenImage})`;