document.addEventListener('DOMContentLoaded', () => {
    // 1. Resaltar enlace activo
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = "#ffeb3b";
            link.style.borderBottom = "2px solid #ffeb3b";
        }
    });

    // 2. Efecto de entrada suave para el contenido
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = 0;
    mainContent.style.transition = "opacity 0.8s ease-in";
    
    setTimeout(() => {
        mainContent.style.opacity = 1;
    }, 100);
});