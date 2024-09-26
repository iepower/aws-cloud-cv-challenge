// visitorCounter.js

// Function to update and display the visitor count
function updateVisitorCount() {
    // Check if the 'visitCount' key exists in localStorage
    if (localStorage.getItem('visitCount')) {
        // If it exists, increment the value by 1
        let count = parseInt(localStorage.getItem('visitCount'));
        count += 1;
        localStorage.setItem('visitCount', count);
    } else {
        // If it doesn't exist, set the initial value to 1
        localStorage.setItem('visitCount', 1);
    }

    // Display the count on the webpage
    document.getElementById('visitor-count').textContent = localStorage.getItem('visitCount');
}

// Call the function to update the count when the page loads
updateVisitorCount();
