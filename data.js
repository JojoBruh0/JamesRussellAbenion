document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Retrieve input values
            const email = signupForm.elements.email.value;
            const username = signupForm.elements.username.value;
            const password = signupForm.elements.password.value;
            const confirmPassword = signupForm.elements.confirmPassword.value;

            // Validate inputs
            if (!email || !username || !password || !confirmPassword) {
                alert('All fields are required.');
                return;
            }

            // Email format validation
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // Get existing users from localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Check if username already exists
            if (users.find(user => user.username === username)) {
                alert('Username already exists.');
                return;
            }

            // Add new user to the array
            const newUser = {
                email: email,
                password: password // Note: Never store passwords in plain text in a real application
            };
            users.push(newUser);

            // Store updated users array in localStorage
            localStorage.setItem('users', JSON.stringify(users));
            alert('Signup successful!');

            // Optionally redirect to login page
            window.location.href = 'indexlogin.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting
    
            // Retrieve input values
            const username = loginForm.elements.email.value; // Assuming the email field is used for username
            const password = loginForm.elements.password.value;
    
            // Validate inputs
            if (!username || !password) {
                alert('Both fields are required.');
                return;
            }
    
            // Get existing users from localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];
    
            // Check if user exists and password matches
            const user = users.find(user => user.email === username && user.password === password); // Assuming the email is used as the username
            if (user) {
                alert('Login successful!');
                window.location.href = 'index2.html'; // Redirect to index.html on successful login
            } else {
                alert('Invalid username or password.');
            }
        });
    }
});
