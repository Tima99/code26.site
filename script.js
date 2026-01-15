// Initialize EmailJS
(function () {
  emailjs.init("jpU1IlY4UdW1oWSvk");
})();

// Form elements
const form = document.getElementById("leadForm");
const statusText = document.getElementById("formStatus");

// Safety check
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    statusText.textContent = "Sending...";
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
      })
      .catch(function () {
        statusText.textContent =
          "Something went wrong. Please try again later.";
        statusText.style.color = "#f87171";
      });
  });
}
