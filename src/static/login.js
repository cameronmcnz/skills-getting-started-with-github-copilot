document.addEventListener("DOMContentLoaded", () => {
  // Check if already logged in
  if (sessionStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "index.html";
    return;
  }

  const loginForm = document.getElementById("login-form");
  const messageDiv = document.getElementById("login-message");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hardcoded credentials
    const validUsername = "bob";
    const validPassword = "slob";

    if (username === validUsername && password === validPassword) {
      // Store login state in sessionStorage
      sessionStorage.setItem("isLoggedIn", "true");
      
      // Redirect to main page
      window.location.href = "index.html";
    } else {
      // Show error message
      messageDiv.textContent = "Invalid username or password";
      messageDiv.className = "error";
      messageDiv.classList.remove("hidden");

      // Hide message after 3 seconds
      setTimeout(() => {
        messageDiv.classList.add("hidden");
      }, 3000);
    }
  });
});
