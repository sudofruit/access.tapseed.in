document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector("form");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Extract form data
    const formData = new FormData(signupForm);
    const userData = {
      username: formData.get("fullname"), // Use 'fullname' as it's the ID of the input field
      email: formData.get("email"),
      password: formData.get("password"),
      // You can add more fields here if needed
    };

    // Send POST request to Strapi registration endpoint
    fetch("https://tapseed.cloud/api/auth/local/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Registration failed");
        }
        return response.json();
      })
      .then((data) => {
        alert("Registration successful:", data);
        // Redirect to login page after successful registration
        window.location.href = "https://profile.tapseed.in/"; // Change 'login.html' to the desired URL
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        // Handle error (e.g., show error message to user)
      });
  });
});
