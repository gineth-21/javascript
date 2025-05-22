document.addEventListener('DOMContentLoaded', () => {
    // Registrar el plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animación de Caperucita
    gsap.to('.caperucita', {
        x: window.innerWidth - 300, // Ajustado para el nuevo tamaño
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            markers: false
        }
    });

    // Animaciones de las nubes
    gsap.to('.nube-1', {
        x: 100,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to('.nube-2', {
        x: -120,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to('.nube-3', {
        x: 80,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Animaciones de los árboles
    const arboles = document.querySelectorAll('.arbol');
    arboles.forEach((arbol, index) => {
        // Animación del tronco
        gsap.to(arbol, {
            x: 20,
            duration: 3 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Animación de las hojas con movimiento más sutil
        gsap.to(arbol.querySelector('.hojas'), {
            rotation: 5,
            x: 10,
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });
});
