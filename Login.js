function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password match some predefined values (for demo purposes)
    if (username === "demoUser" && password === "demoPassword") {
        // Store user data in local storage
        localStorage.setItem("username", username);
        // Redirect to the home page or any other page
        window.location.href = "index.html";
    } else {
        // Show an error message
        const loginError = document.getElementById("login-error");
        loginError.textContent = "Invalid username or password. Please try again.";
    }
}


 








