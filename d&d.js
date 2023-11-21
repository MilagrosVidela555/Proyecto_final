let imagenes = document.querySelectorAll('.card_img img');
let reinicio = document.querySelector(".btn_reiniciar")
let destinos = document.querySelectorAll(".card_soltar");

imagenes.forEach(imagen => {
    imagen.addEventListener('dragstart', iniciaTraslado);
});

imagenes.forEach(imagen => {
    imagen.addEventListener('dragend', finDelTraslado);
});


reinicio.addEventListener('click', reinicioBoton)

function iniciaTraslado(evento) {
    evento.dataTransfer.setData("text/uri-list", evento.target.src);
};

function finDelTraslado(evento) {
    let imagenes = evento.target;
    imagenes.style.display= 'none';
    let contenedorDestino = evento.target.closest('.card_img');
    contenedorDestino.remove();
};

/* en los destinos */
destinos.forEach(destino => {
    destino.addEventListener("dragover", prevenirDefault);
    destino.addEventListener("drop", soltarElemento);
});

function soltarElemento(evento) {
    prevenirDefault(evento);
    let dataimg = evento.dataTransfer.getData("text/uri-list");
    evento.target.innerHTML = `<img src="${dataimg}" />`;

};

function prevenirDefault(evento) {
    evento.preventDefault();
};

function reinicioBoton() {
    window.location.reload();
}
