function alternarModo() {
  document.body.classList.toggle("modo-oscuro")
}

function inicializar() {
  const boton = document.getElementById("switch-modo")
  boton.onclick = alternarModo
}

window.onload = inicializar