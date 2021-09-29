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
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }


    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);



    var elements = document.getElementsByClassName('imagenesc');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
            document.getElementById("imagen").src = elements[this.id].src;
            if (this.id == img0) {
                posicionActual = 0
            } else if (this.id == img1) {
                posicionActual = 1
            } else if (this.id == img2) {
                posicionActual = 2
            } else if (this.id == img3) {
                posicionActual = 3
            } else if (this.id == img4) {
                posicionActual = 4
            }
        }
        )
    }
}

function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}