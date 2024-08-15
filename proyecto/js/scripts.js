document.addEventListener("DOMContentLoaded", function() {
    // Popup para la suscripción
    const subscribeForm = document.getElementById("subscribe-form");
    subscribeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        alert(`Gracias por suscribirte con el correo: ${email}`);
        subscribeForm.reset();
    });

    // Popup para el formulario de contacto
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Gracias por tu mensaje, nos pondremos en contacto contigo pronto.");
            contactForm.reset();
        });
    }
});
