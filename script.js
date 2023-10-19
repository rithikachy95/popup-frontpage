const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

// Function to show the pop-up
function showPopup() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

// Function to hide the pop-up
function hidePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
}

// Show the pop-up when the page loads
showPopup();

// Close the pop-up when the close button is clicked
closePopup.addEventListener('click', hidePopup);

// Close the pop-up when the overlay is clicked
overlay.addEventListener('click', hidePopup);
