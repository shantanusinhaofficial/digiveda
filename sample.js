document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const guestLoginButton = document.getElementById('guest-login');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Add your login logic here (e.g., validation and authentication)
        // For demonstration purposes, we'll just alert a message.
        alert(`Logging in as ${username}`);
    });

    guestLoginButton.addEventListener('click', function () {
        // Redirect to the guest login page (in this case, https://ayush.gov.in/)
        window.location.href = "https://ayush.gov.in/";
    });
});
