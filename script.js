// Contraseña que permitirá el acceso
const correctPassword = "1234"; // Cambia esto por la contraseña que desees
let currentPassword = "";

// Función para añadir números a la contraseña
function addNumber(num) {
    // Si es el símbolo de correo, podemos manejarlo de manera especial
    if (num === 'mail') {
        // Por ahora solo mostramos el símbolo
        document.getElementById('passwordField').value += "✉";
        currentPassword += "mail";
        return;
    }
    
    // Limitamos a 8 caracteres como máximo
    if (currentPassword.length < 8) {
        currentPassword += num;
        // Actualizamos el campo de contraseña con asteriscos o corazones
        document.getElementById('passwordField').value = "❤".repeat(currentPassword.length);
    }
}

// Función para verificar la contraseña
function checkPassword() {
    if (currentPassword === correctPassword) {
        // Si la contraseña es correcta, redirigimos a la página principal
        alert("¡Contraseña correcta! Bienvenido/a.");
        // Redirigimos a la página principal
        window.location.href = "main.html";
    } else {
        // Si la contraseña es incorrecta, mostramos un mensaje
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
        // Limpiamos el campo de contraseña
        currentPassword = "";
        document.getElementById('passwordField').value = "";
    }
}