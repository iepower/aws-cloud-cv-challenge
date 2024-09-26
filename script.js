// visitorCounter.js

// Function to update and display the visitor count
const counter = document.querySelector('.counter-number');

async function updateCounter() {
    try {
        let response = await fetch("https://dh5c5iyzbkfh536wtkzz3jppam0prwnp.lambda-url.eu-north-1.on.aws/");
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        let data = await response.json();

        // Access the views property
        counter.innerHTML = `Views: ${data.views}`;
    } catch (error) {
        console.error('Error fetching views:', error);
        counter.innerHTML = "Couldn't read views";
    }
}

updateCounter();
