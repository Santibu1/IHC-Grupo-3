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
    modal.style.display = "block";
});

// Cerrar modal
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
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

// Validar Login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    if (correo.includes("@") && contraseña.length >= 8) {
        alert("Inicio de sesión exitoso.");
        
        // Limpiar el formulario de login y el formulario de registro
        loginForm.reset();
        registerForm.reset();
        errorLogin.style.display = "none"; // Limpiar el mensaje de error
        
        // Redirigir al usuario a la página principal
        window.location.href = "index.html"; // Cambia "index.html" a la URL de tu página principal
    } else {
        errorLogin.style.display = "block";
    }
});

// Validar Registro
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = document.getElementById("correoRegistro").value;
    const contraseña = document.getElementById("contraseñaRegistro").value;
    const confirmarContraseña = document.getElementById("confirmarContraseña").value;

    if (contraseña !== confirmarContraseña) {
        errorRegistro.textContent = "Las contraseñas no coinciden.";
        errorRegistro.style.display = "block";
    } else if (!correo.includes("@") || !correo.match(/@[a-z]+\.[a-z]{2,}/)) {
        errorRegistro.textContent = "Introduce un correo válido.";
        errorRegistro.style.display = "block";
    } else {
        alert("Registro exitoso.");
        
        // Limpiar el formulario de registro después de un registro exitoso
        registerForm.reset();
        errorRegistro.style.display = "none"; // Limpiar el mensaje de error
        
        // Redirigir al usuario a la página principal después del registro
        window.location.href = "index.html"; // Cambia "index.html" a la URL de tu página principal
    }
});