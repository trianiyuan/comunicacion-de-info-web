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

    document.addEventListener('DOMContentLoaded', function() {
        const gridSection = document.querySelector('.grid-section');

        functioncheckVisibility(); {
            const sectionTop = gridSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) { // Ajusta el umbral según sea necesario
                gridSection.classList.add('visible');
            }
        }

        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);
        checkVisibility(); // Ejecuta la función al cargar la página
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        $('#confirmationModal').modal('show');
    });