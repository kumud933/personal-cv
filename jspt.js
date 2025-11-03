document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phn");

  form.addEventListener("submit", (e) => {
    let valid = true;
    let messages = [];

    // Name validation
    if (nameInput.value.trim() === "") {
      valid = false;
      messages.push("Name is required.");
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      valid = false;
      messages.push("Enter a valid email address.");
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
      valid = false;
      messages.push("Enter a valid 10-digit phone number.");
    }

    if (!valid) {
      e.preventDefault();
      alert(messages.join("\n"));
    }
  });

  // Smooth scroll when clicking links
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
