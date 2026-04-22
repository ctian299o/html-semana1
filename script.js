function cambiarTexto() {
    document.getElementById("texto").textContent = "¡Texto cambiado con JavaScript!";
}

function mostrarMensaje() {
    alert("Bienvenido a mi portafolio ");
}

function toggleContenido() {
    let seccion = document.getElementById("sobre-mi");
    seccion.style.display = seccion.style.display === "none" ? "block" : "none";
}