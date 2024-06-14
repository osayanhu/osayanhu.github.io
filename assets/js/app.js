document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const contactIcon = document.getElementById('contact-icon');
    const contactForm = document.getElementById('contact-form');
    const closeForm = document.getElementById('close-form');

    // Toggle form visibility
    contactIcon.addEventListener('click', function() {
        contactForm.classList.toggle('hidden');
    });

    // Close form when clicking close button
    closeForm.addEventListener('click', function() {
        contactForm.classList.add('hidden');
    });

    // Close form when clicking outside the form
    document.addEventListener('click', function(event) {
        if (!contactForm.contains(event.target) && !contactIcon.contains(event.target)) {
            contactForm.classList.add('hidden');
        }
    });

    // Prevent form from closing when clicking inside the form
    contactForm.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the event from bubbling up
    });
});
