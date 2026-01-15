// Initialize EmailJS
(function () {
  emailjs.init("jpU1IlY4UdW1oWSvk");
})();

// Form elements
const form = document.getElementById("leadForm");
const statusText = document.getElementById("formStatus");

// Safety check
if (form) {
  const submitBtn = form.querySelector(".submit-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    statusText.textContent = "In progress...";
    statusText.style.color = "#94a3b8";

    emailjs
      .sendForm(
        "service_vx18qfc",
        "template_wixkwwh",
        this
      )
      .then(function () {
        statusText.textContent =
          "Thank you! We will contact you shortly.";
        statusText.style.color = "#22d3ee";
        form.reset();
        submitBtn.textContent = "Sent Successfully";
      })
      .catch(function () {
        statusText.textContent =
          "Something went wrong. Please try again later.";
        statusText.style.color = "#f87171";
        // Re-enable button on error to allow retry
        submitBtn.textContent = "Get Free Consultation";
      }).finally(() => {
        submitBtn.disabled = false;
      });
  });
}

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu when link is clicked
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}
