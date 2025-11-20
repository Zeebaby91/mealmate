// Contact Form Handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop page refresh

  // Get values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Simple Validation
  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all fields before submitting.");
    return;
  }

  // Display success message
  alert("✅ Thank you " + name + "! Your message has been received.");
  
  // Reset form
  document.getElementById("contactForm").reset();
});




