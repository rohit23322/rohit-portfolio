// ==========================================
// PORTFOLIO JAVASCRIPT
// ==========================================


// ==========================================
// FORMINIT CONTACT FORM
// ==========================================

const forminit = new Forminit();

// Your Forminit Form ID
const FORM_ID = "805mzykh4q3";


// Get contact form
const contactForm = document.getElementById("contact-form");

// Get status message
const formStatus = document.getElementById("form-status");


// Check if contact form exists
if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        // Prevent normal page refresh
        e.preventDefault();


        // Get submit button
        const submitButton =
            contactForm.querySelector('button[type="submit"]');


        // Show sending message
        formStatus.textContent = "Sending message...";


        // Disable button
        submitButton.disabled = true;


        // Change button text
        submitButton.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';


        // Create FormData
        const formData = new FormData(contactForm);


        try {

            // Send form to Forminit
            const { data, error } =
                await forminit.submit(
                    FORM_ID,
                    formData
                );


            // Check for error
            if (error) {

                console.error("Forminit Error:", error);

                formStatus.textContent =
                    "Failed to send message. Please try again.";

                submitButton.disabled = false;

                submitButton.innerHTML =
                    '<i class="fa-solid fa-paper-plane"></i> Send Message';

                return;
            }


            // ==========================================
            // SUCCESS
            // ==========================================

            formStatus.textContent =
                "Message sent successfully! Thank you for contacting me.";


            // Clear form
            contactForm.reset();


            // Enable button
            submitButton.disabled = false;


            // Restore button
            submitButton.innerHTML =
                '<i class="fa-solid fa-paper-plane"></i> Send Message';


        } catch (error) {

            // ==========================================
            // ERROR
            // ==========================================

            console.error("Error:", error);


            formStatus.textContent =
                "Something went wrong. Please try again.";


            // Enable button
            submitButton.disabled = false;


            // Restore button
            submitButton.innerHTML =
                '<i class="fa-solid fa-paper-plane"></i> Send Message';

        }

    });

}


// ==========================================
// SMOOTH SCROLLING
// ==========================================

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (e) {

        const targetId =
            this.getAttribute("href");


        if (
            targetId &&
            targetId.startsWith("#")
        ) {

            e.preventDefault();


            const targetSection =
                document.querySelector(targetId);


            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


// ==========================================
// ACTIVE NAVIGATION LINK
// ==========================================

const sections =
    document.querySelectorAll("section[id]");


const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================

const scrollTopButton =
    document.createElement("button");


scrollTopButton.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';


scrollTopButton.className =
    "scroll-top";


scrollTopButton.setAttribute(
    "aria-label",
    "Scroll to top"
);


// Add button to page
document.body.appendChild(scrollTopButton);


// Show/hide scroll button
window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});


// Scroll to top
scrollTopButton.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// ==========================================
// BUTTON RIPPLE EFFECT
// ==========================================

const buttons =
    document.querySelectorAll(".btn, .send-btn");


buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        this.classList.add("clicked");


        setTimeout(() => {

            this.classList.remove("clicked");

        }, 300);

    });

});


// ==========================================
// PAGE LOADED
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Portfolio website loaded successfully."
        );

    }
);