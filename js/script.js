// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when a link is clicked (Mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

function showSuccess(e) {
  e.preventDefault();

  const form = document.getElementById("enquiryForm");

  form.removeAttribute("onsubmit"); // prevent loop
  form.submit(); // goes into iframe, not page

  document.getElementById("successOverlay").style.display = "flex";

  return false;
}

document.getElementById("closeSuccess").onclick = () => {
  document.getElementById("successOverlay").style.display = "none";
};

if (window.location.pathname === "/about") {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
if (window.location.pathname === "/admission") {
  document.getElementById("admission").scrollIntoView({ behavior: "smooth" });
}
