const about = document.querySelector("#about")

about.addEventListener("click", (a)=>{
    a.preventDefault();

    const sectionA = document.querySelector(".SobreNosotros-section")
    sectionA.scrollIntoView({behavior: "smooth"})
})

const more = document.querySelector("#more")

more.addEventListener("click", (b)=>{
    b.preventDefault();

    const sectionMore = document.querySelector(".Inicio-Pagina")
    sectionMore.scrollIntoView({behavior: "smooth"})
})
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
    // Limpiar los campos de login
    document.getElementById("correo").value = "";
    document.getElementById("contraseña").value = "";
    errorLogin.style.display = "none"; // Ocultar mensaje de error
});

// Cambiar a formulario de login
cambiarALogin.addEventListener("click", (e) => {
    e.preventDefault();
    formularioRegistro.style.display = "none";
    formularioLogin.style.display = "block";
    // Limpiar los campos de registro
    document.getElementById("nombre").value = "";
    document.getElementById("correoRegistro").value = "";
    document.getElementById("contraseñaRegistro").value = "";
    document.getElementById("confirmarContraseña").value = "";
    errorRegistro.style.display = "none"; // Ocultar mensaje de error
});

// Validar Login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    if (correo.includes("@") && contraseña.length >= 8) {
        alert("Inicio de sesión exitoso.");
        modal.style.display = "none";
        // Aquí puedes agregar la lógica de guardar el estado de sesión si es necesario.
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
        formularioRegistro.style.display = "none";
        formularioLogin.style.display = "block";
        // Limpiar los campos de registro
        document.getElementById("nombre").value = "";
        document.getElementById("correoRegistro").value = "";
        document.getElementById("contraseñaRegistro").value = "";
        document.getElementById("confirmarContraseña").value = "";
        errorRegistro.style.display = "none";
    }
});