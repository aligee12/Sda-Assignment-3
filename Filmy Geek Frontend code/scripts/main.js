document.addEventListener('DOMContentLoaded', () => {
    // Add any dashboard-specific JavaScript functionality here
    const signOutButton = document.querySelector('.signout-btn');
    signOutButton.addEventListener('click', () => {
        // Perform sign-out logic here
        alert('Signed out');
    });
});
