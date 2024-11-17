const about = document.querySelector("#about");

about.addEventListener("click", (a) => {
    a.preventDefault();
    const sectionA = document.querySelector(".SobreNosotros-section");
    sectionA.scrollIntoView({ behavior: "smooth", block: "start" });
});

const more = document.querySelector("#more");
more.addEventListener("click", (b) => {
    b.preventDefault();
    const sectionMore = document.querySelector(".Inicio-Pagina");
    sectionMore.scrollIntoView({ behavior: "smooth", block: "start" });
});

const feed = document.querySelector("#feed");
feed.addEventListener("click", (c) => {
    c.preventDefault(); 
    const feedbackSection = document.querySelector(".feedback-section"); 
    feedbackSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
const errorLogin = document.getElementById("errorLogin");
const errorRegistro = document.getElementById("errorRegistro");

// Abrir modal
abrirModal.addEventListener("click", () => {
    modal.style.display = "block";
    limpiarFormularios(); // Limpiar formularios al abrir el modal
});

// Cerrar modal y limpiar formularios
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
    limpiarFormularios(); // Restablecer formularios al cerrar el modal
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

    if (!correo && !contraseña) {
        mostrarError(errorLogin, "Por favor, completa las credenciales.");
    } else if (!correo) {
        mostrarError(errorLogin, "Por favor, ingresa el correo.");
    } else if (!contraseña) {
        mostrarError(errorLogin, "Por favor, ingresa la contraseña.");
    } else if (!validarFormatoCorreo(correo)) {
        mostrarError(errorLogin, "Introduce un correo válido.");
    } else if (!validarFormatoContraseña(contraseña)) {
        mostrarError(errorLogin, "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.");
    } else {
        alert("Inicio de sesión exitoso.");
        limpiarFormularios();
        window.location.href = "index.html"; // Cambia "index.html" a la URL de tu página principal
    }
});

// Validar Registro
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = document.getElementById("correoRegistro").value.trim();
    const contraseña = document.getElementById("contraseñaRegistro").value.trim();
    const confirmarContraseña = document.getElementById("confirmarContraseña").value.trim();

    if (!correo && !contraseña && !confirmarContraseña) {
        mostrarError(errorRegistro, "Por favor, completa todos los campos.");
    } else if (!correo) {
        mostrarError(errorRegistro, "Por favor, ingresa el correo.");
    } else if (!contraseña) {
        mostrarError(errorRegistro, "Por favor, ingresa la contraseña.");
    } else if (!confirmarContraseña) {
        mostrarError(errorRegistro, "Por favor, confirma tu contraseña.");
    } else if (!validarFormatoCorreo(correo)) {
        mostrarError(errorRegistro, "Introduce un correo válido.");
    } else if (!validarFormatoContraseña(contraseña)) {
        mostrarError(errorRegistro, "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.");
    } else if (contraseña !== confirmarContraseña) {
        mostrarError(errorRegistro, "Las contraseñas no coinciden.");
    } else {
        alert("Registro exitoso.");
        limpiarFormularios();
        window.location.href = "index.html"; // Cambia "index.html" a la URL de tu página principal
    }
});

// Función para mostrar errores
function mostrarError(elementoError, mensaje) {
    elementoError.textContent = mensaje;
    elementoError.style.display = "block";
}

// Función para limpiar formularios
function limpiarFormularios() {
    loginForm.reset(); // Limpia el formulario de login
    registerForm.reset(); // Limpia el formulario de registro
    errorLogin.style.display = "none"; // Oculta el mensaje de error de login
    errorRegistro.style.display = "none"; // Oculta el mensaje de error de registro
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