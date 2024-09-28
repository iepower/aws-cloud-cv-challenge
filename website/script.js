// JavaScript Code
const counter = document.querySelector(".counter-number");

async function updateCounter() {
    let response = await fetch("https://b46pmugjigy47oiaxqguk7u2hu0somof.lambda-url.eu-north-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();
