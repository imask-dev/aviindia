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
        const form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
            if(!form.getAttribute('data-netlify')) {
                // If not running on Netlify, show alert
                // e.preventDefault(); // Uncomment to stop refresh on local test
                // alert('Thank you for your enquiry! We will contact you shortly.');
            }
        });