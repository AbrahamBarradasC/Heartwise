const header = document.querySelector('header');
let lastScrollY = window.scrollY;
let isHovering = false; // Nueva variable para saber si el mouse está ahí

// 1. Detectar cuando el mouse ENTRA al menú
header.addEventListener('mouseenter', () => {
    isHovering = true;
});

// 2. Detectar cuando el mouse SALE del menú
header.addEventListener('mouseleave', () => {
    isHovering = false;
});

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Solo aplicamos la lógica si hemos bajado más de 150px
    if (currentScrollY > 150) { 
        
        // Si estamos bajando (currentScrollY > lastScrollY)
        // Y ADEMÁS el mouse NO está encima del menú (!isHovering)
        if (currentScrollY > lastScrollY && !isHovering) {
            header.classList.add('header-hidden');
            header.classList.remove('header-visible');
        } 
        // Si estamos subiendo
        else if (currentScrollY < lastScrollY) {
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        }
        
    } else {
        // En la parte superior de la página, siempre visible
        header.classList.remove('header-hidden');
        header.classList.add('header-visible');
    }

    lastScrollY = currentScrollY;
});