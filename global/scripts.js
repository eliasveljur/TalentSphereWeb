document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".navbar .burger");
  const dropdown = document.querySelector(".navbar .dropdown");
  const closeBtn = document.querySelector(".navbar .dropdown .x");

  burger.addEventListener("click", () => {
    dropdown.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    dropdown.classList.add("hidden");
  });
});
