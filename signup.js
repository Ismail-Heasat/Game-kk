function signup(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Store user data in local storage (for demo purposes)
    localStorage.setItem("name", name);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Redirect to the login page or any other page
    window.location.href = "login.html";
}
