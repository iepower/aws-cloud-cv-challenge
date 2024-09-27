// JavaScript Code
const counter = document.querySelector(".counter-number");

async function updateCounter() {
    let response = await fetch("https://dh5c5iyzbkfh536wtkzz3jppam0prwnp.lambda-url.eu-north-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();
