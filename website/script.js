const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://b46pmugjigy47oiaxqguk7u2hu0somof.lambda-url.eu-north-1.on.aws/");
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();

        // Assuming the response is in the format: { "views": 123 }
        counter.innerHTML = `Views: ${data.views}`;
    } catch (error) {
        console.error('Error fetching data:', error);
        counter.innerHTML = `Error fetching views`;
    }
}

updateCounter();