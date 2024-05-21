document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#signInForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Perform form validation and authentication here

        // Redirect to home page after successful sign-in
        window.location.href = 'main.html';
    });
});
