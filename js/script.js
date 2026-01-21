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

        // Form Submit Alert (For demonstration if backend not connected)
        // const form = document.querySelector('form');
        // form.addEventListener('submit', (e) => {
        //     if(!form.getAttribute('data-netlify')) {
        //         // If not running on Netlify, show alert
        //         // e.preventDefault(); // Uncomment to stop refresh on local test
        //         // alert('Thank you for your enquiry! We will contact you shortly.');
        //     }
        // });

  function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.phone,
    data.course,
    data.message
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({status: "success"}))
    .setMimeType(ContentService.MimeType.JSON);
}

document.getElementById("enquiryForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = this.querySelector("input[type='text']").value;
  const email = this.querySelector("input[type='email']").value;
  const phone = this.querySelector("input[type='tel']").value;
  const course = this.querySelector("select").value;
  const message = this.querySelector("textarea").value;

  // 1. Send to Google Sheet
fetch("/api/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, phone, course, message })
});


//   // 2. Send Email
//   window.open(
//     `mailto:YOUR_EMAIL?subject=New Enquiry - AIAHM&body=
// Name: ${name}%0A
// Email: ${email}%0A
// Phone: ${phone}%0A
// Course: ${course}%0A
// Message: ${message}`
//   );

//   // 3. Send WhatsApp
//   window.open(
//     `https://wa.me/YOUR_WHATSAPP_NUMBER?text=
// New Enquiry - AIAHM%0A
// Name: ${name}%0A
// Email: ${email}%0A
// Phone: ${phone}%0A
// Course: ${course}%0A
// Message: ${message}`
//   );


  // UI success

// Show animated success screen
document.getElementById("successOverlay").style.display = "flex";

// Auto redirect after 4 seconds
setTimeout(() => {
  window.location.href = "/";
}, 4000);

// Manual close
document.getElementById("closeSuccess").onclick = () => {
  window.location.href = "/";
};

});
