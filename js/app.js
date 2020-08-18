const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const botonEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail")
const loaders = document.getElementById("loaders")

eventListeners()
function eventListeners() {
    document.addEventListener("DOMContentLoaded", inicioApp)
    email.addEventListener("blur", validarCampo)
    asunto.addEventListener("blur", validarCampo)
    mensaje.addEventListener("blur", validarCampo)
    formulario.addEventListener("submit", enviarForm)
}

function inicioApp() {
    botonEnviar.disabled = true
}
function validarCampo() {
    validarLongitud(this)
    if (this.type === "email") {
        validarEmail(this)
    }
    let errores = document.querySelectorAll(".error")
    if (email.value !== "" && asunto.value !== "" && mensaje !== "") {
        if (errores.length === 0) {
            botonEnviar.disabled = false
        }

    }
}

function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = "green";
        campo.classList.remove("error")
        
    } else {
        campo.style.borderBottomColor = "red";
        campo.classList.add("error")
    }
}

function validarEmail(campo) {
    if (campo.value.indexOf("@") !== -1) {
        campo.style.borderBottomColor = "green";
        campo.classList.remove("error")
    } else {
        campo.style.borderBottomColor = "red";
        campo.classList.add("error")
    }
}

function enviarForm(e){
    e.preventDefault()
    const spinner = document.getElementById("spinner");
    spinner.style.display="block"
    const enviado = document.createElement("img")
    enviado.src="img/mail.gif"
    enviado.style.display="block"
    setTimeout(() => {
        spinner.style.display = "none"
        loaders.appendChild(enviado)
        setTimeout(() => {
            enviado.remove()
            formulario.reset()
        }, 4000);
    }, 3000);
}