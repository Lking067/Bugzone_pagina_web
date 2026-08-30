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
