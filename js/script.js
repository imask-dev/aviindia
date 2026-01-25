        // Hamburger Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked (Mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

  // UI success

// function showSuccess(e) {
//   e.preventDefault(); // stop default redirect

//   const form = document.getElementById("enquiryForm");

//   // temporarily remove handler to avoid recursion
//   form.removeAttribute("onsubmit");

//   // submit to FormSubmit in background
//   form.submit();

//   // show success overlay
//   document.getElementById("successOverlay").style.display = "flex";

//   // auto redirect after 4 seconds
// function showSuccess(e) {
//   e.preventDefault();

//   const form = document.getElementById("enquiryForm");
//   form.removeAttribute("onsubmit");
//   form.submit();

//   // show animation on same page
//   document.getElementById("successOverlay").style.display = "flex";

//   return false;
// }

// // close button hides overlay
// document.getElementById("closeSuccess").onclick = () => {
//   document.getElementById("successOverlay").style.display = "none";
// };

//   return false;
// }

// // manual close
// const closeBtn = document.getElementById("closeSuccess");
// if (closeBtn) {
//   closeBtn.onclick = () => {
//     window.location.href = "/";
//   };
// }

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