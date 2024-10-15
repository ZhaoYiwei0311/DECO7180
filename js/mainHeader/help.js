///////////////////////////////////////////////////////////
// Smooth scrolling animation for the help page
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    else if (href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Normal link, redirect to the href
    else {
      e.preventDefault();
      setTimeout(function () {
        window.location.href = href;
      }, 500);
    }
  });
});

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector("#mobile-nav-button");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");
  headerEl.classList.toggle("nav-open");
});
