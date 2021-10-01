let posicionActual = 0;
window.onload = function () {
    const IMAGENES = [
        'img/img0.jpg',
        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg',
        'img/img4.jpg',
        
    ];

    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#anterior');
    let $botonAvanzar = document.querySelector('#siguiente');
    let $imagen = document.querySelector('#imagen');
    let intervalo;

    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }
    function retrocederFoto() {
        if (posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }
    function renderizarImagen() {
        $imagen.src = `${IMAGENES[posicionActual]}`;
    }



    function playIntervalo() {
        intervalo = setInterval(pasarFoto, 1000);
    }


    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);



    var elements = document.getElementsByClassName('imagenesc');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
            document.getElementById("imagen").src = elements[this.id].src;
            posicionActual = this.id;
        }
        )
    }
}

function menuDesplegable() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}