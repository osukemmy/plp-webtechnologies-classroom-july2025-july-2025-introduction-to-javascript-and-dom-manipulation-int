// ====== DOMContentLoaded ensures the script runs after HTML loads ======
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Sunrise Homeschool!");

  // ====== Example 1: Change header color on click ======
  const header = document.querySelector("header");
  header.addEventListener("click", () => {
    header.style.backgroundColor = "#ffb84d";
    alert("You clicked the header! 🌞");
  });

  // ====== Example 2: Form submission handling ======
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // prevent page reload

      // Get input values
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;

      // Simple validation
      if (name === "" || email === "") {
        alert("Please fill in all fields before submitting!");
      } else {
        alert(`Thank you, ${name}! Your message has been received.`);
        form.reset(); // Clear the form
      }
    });
  }

  // ====== Example 3: Dynamic content insertion ======
  const messageSection = document.querySelector("section");
  if (messageSection) {
    const message = document.createElement("p");
    message.textContent = "✨ Learning is a lifelong adventure — join us at Sunrise Homeschool!";
    message.style.textAlign = "center";
    message.style.fontStyle = "italic";
    messageSection.appendChild(message);
  }

  // ====== Example 4: Button interaction ======
  const contactBtn = document.querySelector(".contact-btn");
  if (contactBtn) {
    contactBtn.addEventListener("mouseover", () => {
      contactBtn.style.backgroundColor = "#ff9933";
    });
    contactBtn.addEventListener("mouseout", () => {
      contactBtn.style.backgroundColor = "#cc6600";
    });
  }
});
