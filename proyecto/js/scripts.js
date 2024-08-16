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


    document.addEventListener('DOMContentLoaded', function () {
        var myCarousel = document.querySelector('#testimonialCarousel');
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 4000, // Intervalo en milisegundos (5 segundos)
            ride: 'carousel', // Inicia el carrusel automáticamente
            wrap: true // Hace que el carrusel vuelva al principio al llegar al final
        });
    });

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            console.log('Redireccionando a la página correspondiente');
        });
    });

