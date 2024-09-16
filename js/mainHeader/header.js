///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector("#mobile-nav-button");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");
  headerEl.classList.toggle("nav-open");
});
