const contactForm = document.querySelector("#contact-form");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  contactForm.querySelector(".form-status").textContent = "Thanks. Fibello will reply soon.";
  contactForm.reset();
});
