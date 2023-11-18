let video = document.querySelector("#miVideo");
let zonaTiempo = document.querySelector(".tiempo");
let tiempoActual;

video.addEventListener("loadeddata", () => {
    zonaTiempo.textContent = transformacion(video.duration);
});

const transformacion = (tiempo) => {
    let minutos = Math.floor(tiempo / 60);
    let segundos = Math.floor(tiempo % 60);

    // Añadimos ceros a la izquierda si los segundos son menores a 10.
    segundos = segundos < 10 ? '0' + segundos : segundos;

    return minutos + ":" + segundos;
}

document.getElementById('playBtn').addEventListener('click', () => {
    // Verificamos que la duración del video sea finita antes de acceder a ella.
    if (isFinite(video.duration)) {
        video.play();

        tiempoActual = setInterval(() => {
            zonaTiempo.textContent = transformacion(video.currentTime);
        }, 1000);
    }
});

document.getElementById('pauseBtn').addEventListener('click', () => {
    video.pause();
    clearInterval(tiempoActual);
});
