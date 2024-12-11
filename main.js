// Form validation and handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Grab form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for reaching out!');
    } else {
        alert('Please fill out all fields.');
    }
});
