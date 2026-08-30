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
