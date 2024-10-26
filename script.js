// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default jump behavior
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll to the target element smoothly
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Validation (Optional)
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic Validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // You can add more sophisticated validation here, e.g., check email format

        // Send the form data (e.g., using AJAX)
        // ...

        // Display a success message or handle the response
        // ...
    });
}