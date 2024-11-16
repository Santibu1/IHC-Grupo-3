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
    modal.classList.add("visible");  // Usamos la clase para hacer la transición de visibilidad
});

// Cerrar modal
cerrarModal.addEventListener("click", () => {
    modal.classList.remove("visible");  // Eliminamos la clase para cerrar el modal
});

// Cambiar a formulario de registro
cambiarARegistro.addEventListener("click", (e) => {
    e.preventDefault();
    formularioLogin.style.display = "none";
    formularioRegistro.style.display = "block";
});

// Cambiar a formulario de login
cambiarALogin.addEventListener("click", (e) => {
    e.preventDefault();
    formularioRegistro.style.display = "none";
    formularioLogin.style.display = "block";
});

// Función para manejar los errores de forma más específica
const mostrarErrorLogin = (correo, contraseña) => {
    if (!correo.includes("@")) {
        errorLogin.textContent = "Introduce un correo válido.";
    } else if (contraseña.length < 8) {
        errorLogin.textContent = "La contraseña debe tener al menos 8 caracteres.";
    } else {
        errorLogin.style.display = "none";
        return true;
    }
    errorLogin.style.display = "block";
    return false;
};

// Validar Login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    if (mostrarErrorLogin(correo, contraseña)) {
        alert("Inicio de sesión exitoso.");

        // Limpiar el formulario de login
        loginForm.reset();
        errorLogin.style.display = "none"; // Limpiar el mensaje de error

        // Redirigir al usuario a la página principal
        window.location.href = "index.html"; // Cambia "index.html" a la URL de tu página principal
    }
});

// Función para manejar la validación del registro
const mostrarErrorRegistro = (correo, contraseña, confirmarContraseña) => {
    if (contraseña !== confirmarContraseña) {
        errorRegistro.textContent = "Las contraseñas no coinciden.";
    } else if (!correo.includes("@") || !correo.match(/@[a-z]+\.[a-z]{2,}/)) {
        errorRegistro.textContent = "Introduce un correo válido.";
    } else {
        errorRegistro.style.display = "none";
        return true;
    }
    errorRegistro.style.display = "block";
    return false;
};

// Validar Registro
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = document.getElementById("correoRegistro").value;
    const contraseña = document.getElementById("contraseñaRegistro").value;
    const confirmarContraseña = document.getElementById("confirmarContraseña").value;

    if (mostrarErrorRegistro(correo, contraseña, confirmarContraseña)) {
        alert("Registro exitoso.");

        // Limpiar el formulario de registro después de un registro exitoso
        registerForm.reset();
        errorRegistro.style.display = "none"; // Limpiar el mensaje de error

        // Redirigir al usuario a la página principal después del registro
        window.location.href = "index.html"; // Cambia "index.html" a la URL de tu página principal
    }
});