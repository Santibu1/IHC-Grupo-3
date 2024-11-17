const about = document.querySelector("#about");

about.addEventListener("click", (a) => {
    a.preventDefault();
    const sectionA = document.querySelector(".SobreNosotros-section");
    sectionA.scrollIntoView({ behavior: "smooth" });
});

const more = document.querySelector("#more");

more.addEventListener("click", (b) => {
    b.preventDefault();
    const sectionMore = document.querySelector(".Inicio-Pagina");
    sectionMore.scrollIntoView({ behavior: "smooth" });
});
const feed = document.querySelector("#feed");

more.addEventListener("click", (c) => {
    c.preventDefault();
    const footerFeed = document.querySelector(".footer-section");
    footerFeed.scrollIntoView({ behavior: "smooth" });
});
// Elementos del DOM
const modal = document.getElementById("modal");
const abrirModal = document.getElementById("abrirModal");
const cerrarModal = document.querySelector(".cerrar");
const formularioLogin = document.getElementById("formularioLogin");
const formularioRegistro = document.getElementById("formularioRegistro");
const cambiarARegistro = document.getElementById("cambiarARegistro");
const cambiarALogin = document.getElementById("cambiarALogin");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// Abrir modal
abrirModal.addEventListener("click", () => {
    modal.style.display = "block";
});

// Cerrar modal y limpiar formularios
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
    limpiarFormularios(); // Restablecer formularios
});

// Cambiar a formulario de registro
cambiarARegistro.addEventListener("click", (e) => {
    e.preventDefault();
    formularioLogin.style.display = "none";
    formularioRegistro.style.display = "block";
    limpiarFormularios(); // Limpiar formularios al cambiar entre login y registro
});

// Cambiar a formulario de login
cambiarALogin.addEventListener("click", (e) => {
    e.preventDefault();
    formularioRegistro.style.display = "none";
    formularioLogin.style.display = "block";
    limpiarFormularios(); // Limpiar formularios al cambiar entre registro y login
});

// Validar Login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = document.getElementById("correo").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();

    limpiarErrores(); // Limpia mensajes de error previos

    if (!correo && !contraseña) {
        mostrarError("correo", "Por favor, ingresa tu correo.");
        mostrarError("contraseña", "Por favor, ingresa tu contraseña.");
    } else if (!correo) {
        mostrarError("correo", "Por favor, ingresa tu correo.");
    } else if (!validarFormatoCorreo(correo)) {
        mostrarError("correo", "Introduce un correo válido.");
    } else if (!contraseña) {
        mostrarError("contraseña", "Por favor, ingresa tu contraseña.");
    } else if (!validarFormatoContraseña(contraseña)) {
        mostrarError("contraseña", "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.");
    } else {
        alert("Inicio de sesión exitoso.");
        limpiarFormularios();
        window.location.href = "index.html"; // Cambia "index.html" a la URL de tu página principal
    }
});

// Validar Registro
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombres = document.getElementById("nombres").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const correo = document.getElementById("correoRegistro").value.trim();
    const contraseña = document.getElementById("contraseñaRegistro").value.trim();
    const confirmarContraseña = document.getElementById("confirmarContraseña").value.trim();

    limpiarErrores(); // Limpia mensajes de error previos

    if (!nombres) {
        mostrarError("nombres", "Por favor, ingresa tus nombres.");
    }
    if (!apellidos) {
        mostrarError("apellidos", "Por favor, ingresa tus apellidos.");
    }
    if (!correo) {
        mostrarError("correoRegistro", "Por favor, ingresa tu correo.");
    } else if (!validarFormatoCorreo(correo)) {
        mostrarError("correoRegistro", "Introduce un correo válido.");
    }
    if (!contraseña) {
        mostrarError("contraseñaRegistro", "Por favor, ingresa tu contraseña.");
    } else if (!validarFormatoContraseña(contraseña)) {
        mostrarError("contraseñaRegistro", "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.");
    }
    if (!confirmarContraseña) {
        mostrarError("confirmarContraseña", "Por favor, confirma tu contraseña.");
    } else if (contraseña && contraseña !== confirmarContraseña) {
        mostrarError("confirmarContraseña", "Las contraseñas no coinciden.");
    }

    if (
        nombres &&
        apellidos &&
        correo &&
        validarFormatoCorreo(correo) &&
        contraseña &&
        validarFormatoContraseña(contraseña) &&
        confirmarContraseña === contraseña
    ) {
        alert("Registro exitoso.");
        limpiarFormularios();
        window.location.href = "index.html"; // Cambia "index.html" a la URL de tu página principal
    }
});

// Función para mostrar errores específicos por campo
function mostrarError(campoId, mensaje) {
    const campo = document.getElementById(campoId);
    const mensajeError = document.createElement("p");
    mensajeError.className = "mensaje-error";
    mensajeError.textContent = mensaje;
    mensajeError.style.color = "red";
    mensajeError.style.fontSize = "0.9em";
    mensajeError.style.marginTop = "5px";
    campo.parentNode.appendChild(mensajeError);
}

// Función para limpiar formularios y errores
function limpiarFormularios() {
    loginForm.reset();
    registerForm.reset();
    limpiarErrores(); // Limpia los mensajes de error
}

// Función para limpiar mensajes de error
function limpiarErrores() {
    const errores = document.querySelectorAll(".mensaje-error");
    errores.forEach((error) => error.remove());
}

// Función para validar el formato del correo
function validarFormatoCorreo(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}

// Función para validar el formato de la contraseña
function validarFormatoContraseña(contraseña) {
    const regexContraseña = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regexContraseña.test(contraseña);
}