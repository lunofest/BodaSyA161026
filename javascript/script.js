// -------------------- musica ------------------------

const audio = document.getElementById("audio");
const playButton = document.querySelector(".player__button--play");
const rewindButton = document.querySelector(".player__button--rewind");
const forwardButton = document.querySelector(".player__button--forward");

// Alternar Play/Pause
playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Si la música termina, volver a poner el icono de "play"
audio.addEventListener("ended", () => {
    playButton.innerHTML = '<i class="fas fa-play"></i>';
});

// Retroceder 5 segundos
rewindButton.addEventListener("click", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 5);
});

// Avanzar 5 segundos
forwardButton.addEventListener("click", () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
});




// ------------------- temporizador -----------------------

// Fecha objetivo en formato "July 1, 2025 22:30:00"
const fechaObjetivo = new Date("october 16, 2026 20:00:00").getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("dias").textContent = dias.toString().padStart(2, "0");
        document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
        document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
        document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
    } else {
        document.querySelector(".contador__titulo").textContent = "¡Es el día!";
        document.querySelector(".contador__tiempo").style.display = "none";
    }
}

// Actualiza el contador cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();



// --------------------------------gift---------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('mostrarBoton');
    const textoDesplegable = document.getElementById('textoDesplegable');
  
    boton.addEventListener('click', function () {
      textoDesplegable.classList.toggle('mostrar');
    });
  });
  
  
  function copyText() {
    var aliasText = document.getElementById('alias').innerText; // Obtener el texto del alias
    var tempInput = document.createElement('input');
    tempInput.value = aliasText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  
    // Mostrar el mensaje de "¡Copiado!"
    var copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    setTimeout(function() {
        copyMessage.style.display = 'none';
    }, 1500); // Ocultar el mensaje después de 1.5 segundos
  }
  
  
  
  function copyCbuText() {
    const aliasText = document.getElementById('cbuAlias').textContent;
    const copyMessage = document.getElementById('copyCbuMessage');
  
    const textarea = document.createElement('textarea');
    textarea.value = aliasText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  
    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 2000);
  }



//   ----------------- buzon de deseos -----------------------
  
document.getElementById("deseos__enviar").addEventListener("click", function() {
    var mensaje = document.getElementById("deseos__textarea").value.trim();
    if (mensaje !== "") {
        var numero = "542974246254";
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
        window.open(url, "_blank");
    } else {
        alert("Por favor, escribe un mensaje antes de enviar.");
    }
});
  
// --------------------------- playlist --------------------------------

  document.addEventListener('DOMContentLoaded', function() {
    // Definir los números de teléfono
    const phoneNumber1 = '543816591298'; // Número para el primer botón
    const phoneNumber2 = '543816591298'; // Número para el segundo botón
  
    // Función para enviar mensaje por WhatsApp
    function sendMessage(phoneNumber) {
        const name = document.getElementById('userName').value;
        const message = document.getElementById('whatsappMessage').value;
  
        if (name.trim() === '' || message.trim() === '') {
            alert('Por favor, completa ambos campos antes de enviar.');
            return;
        }
  
        const fullMessage = `*Nombre y Apellido:* ${name}\n\n*Tema recomendado:* ${message}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
  
        // Abre la URL de WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');
  
        // Mostrar mensaje de confirmación
        alert('Mensaje enviado');
  
        // Limpiar los campos de entrada
        document.getElementById('userName').value = '';
        document.getElementById('whatsappMessage').value = '';
  
        // Volver al bloque de formulario
        document.querySelector('.playlist').scrollIntoView({ behavior: 'smooth' });
    }
  
    // Asignar eventos a los botones
    document.getElementById('botonplay1').addEventListener('click', function() {
        sendMessage(phoneNumber1);
    });
  
    document.getElementById('botonplay2').addEventListener('click', function() {
        sendMessage(phoneNumber2);
    });
  });
  


  // --------------- confirmacion --------------------------------------



document.addEventListener('DOMContentLoaded', function() {
    // Definir los números de teléfono
    const recipientNumber1 = '542974246254'; // Número para el primer botón
    const recipientNumber2 = '543815411429'; // Número para el segundo botón
  
    // Función para enviar mensaje por WhatsApp
    function sendMessage(phoneNumber) {
        const userName = document.getElementById('userFullName').value.trim();
        const userMessage = document.getElementById('customMessage').value.trim();
        const attendanceStatus = document.querySelector('input[name="attendanceOption"]:checked');
  
        if (!attendanceStatus) {
            alert('Por favor, selecciona si asistirás o no.');
            return;
        }
  
        if (userName === '') {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }
  
        const finalMessage = `*Presencia:* ${attendanceStatus.value}\n*Nombre y Apellido:* ${userName}\n*Mensaje:* ${userMessage ? userMessage : 'N/A'}`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
  
        // Abre la URL de WhatsApp en una nueva pestaña
        window.open(whatsappLink, '_blank');
  
        // Mostrar mensaje de confirmación
        alert('Mensaje enviado');
  
        // Limpiar los campos de entrada
        document.getElementById('userFullName').value = '';
        document.getElementById('customMessage').value = '';
        document.querySelectorAll('input[name="attendanceOption"]').forEach(radio => radio.checked = false);
  
        // Volver al bloque de formulario
        document.getElementById('correo').scrollIntoView({ behavior: 'smooth' });
    }
  
    // Asignar eventos a los botones
    document.getElementById('botoncito1').addEventListener('click', function() {
        sendMessage(recipientNumber1);
    });
  
    document.getElementById('botoncito2').addEventListener('click', function() {
        sendMessage(recipientNumber2);
    });
  });
  