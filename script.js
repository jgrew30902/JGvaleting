document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here, you would typically send the form data to your server or an email
    // For demonstration, we'll just log it to the console
    console.log('Form submission:', name, email, message);

    alert('Thank you for your message, ' + name + '! We will get back to you soon.');
});
