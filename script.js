
// --------------videoo historia----------------
let video = document.querySelector("#miVideo");
let zonaTiempo = document.querySelector(".tiempo");
let tiempoActual;

video.addEventListener("loadeddata", () => {
    zonaTiempo.textContent = transformacion(video.duration);
});

const transformacion = (tiempo) => {
    let minutos = Math.floor(tiempo / 60);
    let segundos = Math.floor(tiempo % 60);
    segundos = segundos < 10 ? '0' + segundos : segundos;

    return minutos + ":" + segundos;
}

document.getElementById('playBtn').addEventListener('click', () => {

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
