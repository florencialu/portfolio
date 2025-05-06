

function menuToggle() {
    document.getElementById("menu-toggle").addEventListener("click", function () {
        const menu = document.querySelector(".navmenulist");
        menu.classList.toggle("active");
    });
}

function flechaEffecto() {
    document.getElementById('flecha').addEventListener('click', function () {
        const hiddenContent = document.getElementById('contenedor_oculto');
        hiddenContent.classList.toggle('open'); /* agregado */
    });

}

/* agregar animacion boton ej: las letritas cayendo */


const galeria = document.querySelector('.galeria');
const slides = document.querySelectorAll('.galeriascroll');
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const contenedorGaleria = document.querySelector('.contenedor_galeria');

let index = 0;

function navegar(dir) {

    index = (index + dir + slides.length) % slides.length;


    const offset = -index * 100;
    contenedorGaleria.style.transform = `translateX(${offset}%)`;
}

menuToggle();
flechaEffecto();


