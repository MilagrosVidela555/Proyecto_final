let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");

let reinicio = document.querySelector(".btn_reiniciar")
let destinos = document.querySelectorAll(".card_soltar");

img1.addEventListener('dragstart', iniciaTraslado);
img2.addEventListener('dragstart', iniciaTraslado);
img3.addEventListener('dragstart', iniciaTraslado);

img1.addEventListener('dragend', finDelTraslado);
img2.addEventListener('dragend', finDelTraslado);
img3.addEventListener('dragend', finDelTraslado);


reinicio.addEventListener('click', reinicioBoton)

function iniciaTraslado(evento) {
    evento.dataTransfer.setData("text/uri-list", evento.target.src);
};

function finDelTraslado(evento) {
    let img1 = evento.target;
    let img2 = evento.target;
    let img3 = evento.target;
    img1.style.visibility= "hidden"
    img2.style.visibility= "hidden"
    img3.style.visibility= "hidden"
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