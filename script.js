// ===============================
// MENU LATERAL
// ===============================

function toggleMenu() {

    let menu = document.getElementById("sideMenu");

    menu.classList.toggle("active");

}


// CERRAR MENU AL HACER CLICK FUERA

document.addEventListener("click", function(event){

    let menu = document.getElementById("sideMenu");
    let boton = document.querySelector(".menu-btn");


    if(
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !boton.contains(event.target)
    ){

        menu.classList.remove("active");

    }

});



// ===============================
// BUSCADOR
// ===============================

function buscar(){

    let texto = document.querySelector(".buscador input").value.toLowerCase();


    let tarjetas = document.querySelectorAll(".card, .news-card, .guia-card");


    tarjetas.forEach(function(card){

        let contenido = card.innerText.toLowerCase();


        if(contenido.includes(texto)){

            card.style.display="flex";

        }else{

            card.style.display="none";

        }

    });

}
window.onload = function() {
    alert("¡Bienvenido a BUGZONE! Esperamos que disfrutes de nuestra página.");
};
// ===============================
// VALIDACIÓN DEL FORMULARIO
// ===============================

document.getElementById("formOpinion").addEventListener("submit", function(event) {

    let correo = document.getElementById("correo").value.trim();
    let juegos = document.getElementById("juegos").value.trim();

    let errorCorreo = document.getElementById("errorCorreo");
    let errorJuegos = document.getElementById("errorJuegos");

    let formularioValido = true;


    // Limpiar mensajes anteriores

    errorCorreo.textContent = "";
    errorJuegos.textContent = "";


    // VALIDAR CORREO

    if (correo === "") {

        errorCorreo.textContent = "Por favor, ingresá tu correo electrónico.";
        formularioValido = false;

    } else {

        let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoCorreo.test(correo)) {

            errorCorreo.textContent = "Ingresá un correo electrónico válido.";
            formularioValido = false;

        }

    }


    // VALIDAR CAMPO JUEGOS

    if (juegos === "") {

        errorJuegos.textContent = "Este campo no puede estar vacío.";
        formularioValido = false;

    }


    // SI HAY ERRORES, NO ENVÍA EL FORMULARIO

    if (!formularioValido) {

        event.preventDefault();

    }

});
function actualizarFechaHora() {
    const ahora = new Date();

    const fecha = ahora.toLocaleDateString('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const hora = ahora.toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    document.getElementById("fecha-hora").textContent =
        fecha + " | " + hora;
}

// Mostrar inmediatamente
actualizarFechaHora();

// Actualizar cada segundo
setInterval(actualizarFechaHora, 1000);
// ==========================================
// 7. RESUMEN DEL FORMULARIO
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formOpinion");

    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            const correo = document.getElementById("correo").value;
            const juegos = document.getElementById("juegos").value;

            const gusto = document.querySelector('input[name="gusto"]:checked');
            const estilo = document.querySelector('input[name="estilo"]:checked');
            const recomendar = document.querySelector('input[name="recomendar"]:checked');
            const accesibilidad = document.querySelector('input[name="accesibilidad"]:checked');

            const sugerencia = document.getElementById("sugerencia").value;
            const estiloSugerencia = document.getElementById("estilo_sugerencia").value;
            const noRecomendar = document.getElementById("no_recomendar").value;
            const accesoExplicacion = document.getElementById("acceso_explicacion").value;


            let resumen = "===== RESUMEN DE TU OPINIÓN =====\n\n";

            resumen += "Correo: " + correo + "\n";

            resumen += "¿Te gustó la página?: " +
                (gusto ? gusto.value : "No respondido") + "\n";

            if (sugerencia !== "") {
                resumen += "Sugerencia sobre la página: " + sugerencia + "\n";
            }

            resumen += "\nEstilo de la página: " +
                (estilo ? estilo.value : "No respondido") + "\n";

            if (estiloSugerencia !== "") {
                resumen += "Sugerencia sobre el estilo: " +
                    estiloSugerencia + "\n";
            }

            resumen += "\nJuegos que debería agregar: " +
                (juegos || "No respondió") + "\n";

            resumen += "\n¿Nos recomendarías?: " +
                (recomendar ? recomendar.value : "No respondido") + "\n";

            if (noRecomendar !== "") {
                resumen += "Motivo: " + noRecomendar + "\n";
            }

            resumen += "\nAccesibilidad: " +
                (accesibilidad ? accesibilidad.value : "No respondido") + "\n";

            if (accesoExplicacion !== "") {
                resumen += "Explicación: " + accesoExplicacion + "\n";
            }


            const confirmar = confirm(
                resumen +
                "\n\n¿Los datos son correctos y querés enviar el formulario?"
            );


            if (confirmar) {

                // Permite enviar el formulario después de confirmar
                formulario.submit();

            }

        });

    }
});


// ==========================================
// 5. GALERÍA DE IMÁGENES
// ==========================================

let imagenActual = 0;

const imagenesGaleria = [
    "imagenes/imagen1.jpg",
    "imagenes/imagen2.jpg",
    "imagenes/imagen3.jpg",
    "imagenes/imagen4.jpg"
];


function mostrarImagen(numero) {

    if (numero < 0) {
        numero = imagenesGaleria.length - 1;
    }

    if (numero >= imagenesGaleria.length) {
        numero = 0;
    }

    imagenActual = numero;

    const imagenGrande = document.getElementById("imagenGrande");

    if (imagenGrande) {
        imagenGrande.src = imagenesGaleria[imagenActual];
    }

}


function siguienteImagen() {

    mostrarImagen(imagenActual + 1);

}


function anteriorImagen() {

    mostrarImagen(imagenActual - 1);

}


function abrirImagen(numero) {

    imagenActual = numero;

    const visor = document.getElementById("visorImagen");

    const imagenGrande = document.getElementById("imagenGrande");

    if (visor && imagenGrande) {

        imagenGrande.src = imagenesGaleria[imagenActual];

        visor.style.display = "flex";

    }

}


function cerrarImagen() {

    const visor = document.getElementById("visorImagen");

    if (visor) {
        visor.style.display = "none";
    }

}
