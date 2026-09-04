// Burger menu for mobile

const nav = document.querySelector("#nav_links");
const button = document.querySelector("#burger_button");

button.addEventListener("click", (event) => {
  nav.classList.toggle("active");
});
