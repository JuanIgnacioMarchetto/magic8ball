// Función para obtener una respuesta aleatoria
function obtenerRespuestaAleatoria() {
    const respuestas = [
        "Es cierto.",
        "Es decididamente así.",
        "Sin duda.",
        "Sí, definitivamente.",
        "Puedes contar con ello.",
        "Según mi punto de vista, sí.",
        "Muy probable.",
        "Las perspectivas son buenas.",
        "Sí.",
        "Todo apunta a que sí.",
        "Es confuso, intenta de nuevo.",
        "Pregunta de nuevo más tarde.",
        "Mejor no decirte ahora.",
        "No se puede predecir ahora.",
        "Concéntrate y pregunta de nuevo.",
        "No cuentes con ello.",
        "Mi respuesta es no.",
        "Mis fuentes dicen que no.",
        "Las perspectivas no son buenas.",
        "Muy dudoso."
    ];

    const indiceAleatorio = Math.floor(Math.random() * respuestas.length);
    return respuestas[indiceAleatorio];
}

// Función para mostrar la respuesta en pantalla
function mostrarRespuesta(respuesta) {
    const respuestaElemento = document.getElementById("respuesta");
    respuestaElemento.textContent = respuesta;
}

// Función para manejar el evento de agitar la Magic 8 Ball
function agitarMagic8Ball() {
    const respuesta = obtenerRespuestaAleatoria();
    mostrarRespuesta(respuesta);
}

// Evento de agitar la Magic 8 Ball al hacer clic en el botón
document.getElementById("boton-agitar").addEventListener("click", agitarMagic8Ball);

// Evento de agitar la Magic 8 Ball al mover el dispositivo en la versión móvil
if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
        if (event.beta > 20 || event.beta < -20 || event.gamma > 20 || event.gamma < -20) {
            agitarMagic8Ball();
        }
    });
}
