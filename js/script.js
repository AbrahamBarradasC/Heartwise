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

/* ==========================================
   LÓGICA DE VIDEOS VIMEO
   ========================================== */
function loadVimeo(element) {
    // 1. Obtenemos el ID del video desde el HTML
    const videoId = element.getAttribute('data-vimeo-id');
    
    // 2. Verificamos que tenga ID
    if (videoId) {
        // 3. Creamos el código del iframe de Vimeo
        // autoplay=1: se reproduce solo al cargar
        // title=0, byline=0, portrait=0: oculta textos de vimeo para que se vea limpio
        const iframe = `
            <iframe src="https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0" 
            width="100%" height="100%" frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        `;

        // 4. Reemplazamos la imagen y el botón por el video real
        element.innerHTML = iframe;
        
        // 5. Quitamos el evento onclick para que no recargue si dan clic de nuevo
        element.onclick = null;
        element.classList.add('playing');
    }
}