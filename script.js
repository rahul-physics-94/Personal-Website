// Typewriter effect for homepage introduction
const typewriterText = "Welcome to My Portfolio!";
const speed = 100;
let i = 0;

function typeWriter() {
    if (i < typewriterText.length) {
        document.getElementById("about-intro").innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

if (document.getElementById("about-intro")) typeWriter();

// Expandable experience items
document.querySelectorAll('.experience-item').forEach(item => {
    item.addEventListener('click', () => {
        const details = item.querySelector('.experience-details');
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
});

// Gallery filtering
function filterProjects(category) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Contact form submission and resume download
let contactDetails = [];

document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    saveContactDetails(name, email, message);

    const resumeLink = document.getElementById('resumeLink');
    resumeLink.style.pointerEvents = 'auto';
    resumeLink.style.opacity = '1';

    alert('Form submitted successfully! Resume download enabled.');
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function saveContactDetails(name, email, message) {
    contactDetails.push({ Name: name, Email: email, Message: message });
}
function saveContactDetails(name, email, message) {
    contactDetails.push({ Name: name, Email: email, Message: message });
}
// send contact details via email
// Initialize EmailJS with your User ID
emailjs.init("NLYSMCVKBXTDyjBu_");

// Send contact details to email upon form submission
function sendContactDetails(name, email, message) {
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        name: name,
        email: email,
        message: message,
    })
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Contact details sent to your email!");
    })
    .catch(function(error) {
        console.error("FAILED...", error);
        alert("Failed to send email. Please check your configuration.");
    });
}

// Modify the contact form submission handler to call sendContactDetails
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    saveContactDetails(name, email, message);

    const resumeLink = document.getElementById('resumeLink');
    resumeLink.style.pointerEvents = 'auto';
    resumeLink.style.opacity = '1';

    sendContactDetails(name, email, message);
    alert('Form submitted successfully! Resume download enabled.');
});
// Add scroll-based animation for each section
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const animateOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.8;
            if (sectionTop < triggerPoint) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run on load
});

