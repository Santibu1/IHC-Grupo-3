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

// Abrir el modal
abrirModal.addEventListener("click", () => {
    modal.style.display = "block";
});

// Cerrar el modal
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

// Cerrar el modal al hacer clic fuera de él
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Validar Login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    if (correo === "usuario@ejemplo.com" && contraseña === "Contraseña123") {
        alert("Inicio de sesión exitoso.");
        modal.style.display = "none";
    } else {
        errorLogin.style.display = "block";
    }
});

// Validar Registro
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const contraseña = document.getElementById("contraseñaRegistro").value;
    const confirmarContraseña = document.getElementById("confirmarContraseña").value;

    if (contraseña === confirmarContraseña) {
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        formularioRegistro.style.display = "none";
        formularioLogin.style.display = "block";
    } else {
        errorRegistro.style.display = "block";
    }
});