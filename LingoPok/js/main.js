// Manejo del formulario de contacto con Formspree
const form = document.getElementById("pokForm");
const status = document.getElementById("form-status");
const button = document.getElementById("submitBtn");

if (form) {
    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // Evita que la página salte a otra web
        
        const data = new FormData(event.target);
        button.disabled = true;
        button.innerText = "Enviando...";

        fetch(event.target.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "¡Mensaje enviado con éxito!";
                status.style.color = "#d4af37"; // Dorado EduNexus
                form.reset();
            } else {
                status.innerHTML = "Error al enviar. Inténtalo de nuevo.";
                status.style.color = "red";
            }
        }).catch(error => {
            status.innerHTML = "Error de conexión.";
            status.style.color = "red";
        }).finally(() => {
            button.disabled = false;
            button.innerText = "Enviar";
        });
    });
}