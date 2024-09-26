// Get the hamburger and overlay elements
let hamburger = document.getElementById('hamburger');
let overlay = document.getElementById('overlay');
let closeBtn = document.getElementById('close-btn');

// When the hamburger is clicked, show the overlay
hamburger.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    overlay.style.display = 'block';  // Show the overlay
});

// When the close button is clicked, hide the overlay
closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    overlay.style.display = 'none';  // Hide the overlay
});



// Get the hamburger and overlay elements
let mobilehamburger = document.getElementById('mobilehamburger');

// When the hamburger is clicked, show the overlay
mobilehamburger.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    overlay.style.display = 'block';  // Show the overlay
});

// When the close button is clicked, hide the overlay
closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    overlay.style.display = 'none';  // Hide the overlay
});
