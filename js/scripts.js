let posicionActual = 0;

window.onload = function () {
    const IMAGENES = [
        'img/img0.jpg',
        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg',
        'img/img4.jpg',

    ];
    let intervalo;
    intervalo = setInterval(pasarFoto, 5000);
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#anterior');
    let $botonAvanzar = document.querySelector('#siguiente');
    let $imagen = document.querySelector('#imagen');


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


    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonAvanzar.onclick = function () {
        clearTimeout(intervalo);
        intervalo = setInterval(pasarFoto, 5000);
    }
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonRetroceder.onclick = function () {
        clearTimeout(intervalo);
        intervalo = setInterval(pasarFoto, 5000);
    }


    var elements = document.getElementsByClassName('imagenesc');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
            clearTimeout(intervalo);
            document.getElementById("imagen").src = elements[this.id].src;
            posicionActual = this.id;
            intervalo = setInterval(pasarFoto, 5000);
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