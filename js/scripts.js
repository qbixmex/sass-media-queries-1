const navBtn = document.querySelector("#hamburger-btn");
const navLinks = document.querySelector("#nav-links");
const navLinksList = document.querySelectorAll(".navbar-link");

navBtn?.addEventListener("click", (event) => {
  if (navLinks?.classList.contains("nav-links-hidden")) {
    navLinks?.classList.replace("nav-links-hidden", "nav-links-displayed");
  } else {
    navLinks?.classList.replace("nav-links-displayed", "nav-links-hidden");
  }
});

navLinksList.forEach(link => {
  link.addEventListener("click", () => {
    navLinks?.classList.replace("nav-links-displayed", "nav-links-hidden");
  })
});
