// Select elements
const contactIcon = document.getElementById('contact-icon');
const contactForm = document.getElementById('contact-form');
const closeForm = document.getElementById('close-form');

// Toggle form visibility
contactIcon.addEventListener('click', () => {
    contactForm.classList.toggle('hidden');
});

// Close form
closeForm.addEventListener('click', () => {
    contactForm.classList.add('hidden');
});

// Prevent form from closing when clicking inside the form
contactForm.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the event from bubbling up
});

// Close form when clicking outside the form
document.addEventListener('click', (event) => {
    if (!contactForm.contains(event.target) && !contactIcon.contains(event.target)) {
        contactForm.classList.add('hidden');
    }
});
