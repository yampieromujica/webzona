const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;
const whatsapp = document.getElementById("whatsapp").value;
const comentario = document.getElementById("comentario").value;

function validarFormulario() {


  // Validar Nombre (solo letras y espacios)

  let nombreRegex = [a-zA-Z\s]{2,15};
  if (!nombreRegex.test(nombre)) {
    alert("Por favor, introduce un nombre válido (solo letras y espacios).");
    return false;
  }

  // Validar Apellido (solo letras y espacios)
  let apellidoRegex = [a-zA-Z\s]{2,15};
  if (!apellidoRegex.test(apellido)) {
    alert("Por favor, introduce un apellido válido (solo letras y espacios).");
    return false;
  }

  // Validar WhatsApp (debe empezar con + y tener entre 8 y 15 dígitos)
  let whatsappRegex = \+\d{8,15};
  if (!whatsappRegex.test(whatsapp)) {
    alert("Por favor, introduce un número de WhatsApp válido (ej: +5491123456789).");
    return false;
  }

  // Validar Comentario (no debe estar vacío)
  if (comentario.trim() === "") {
    alert("Por favor, introduce un comentario.");
    return false;
  }

  // Si todo es válido, el formulario se envía
  
  return true;
  nombre.value = "";
  apellido.value = "";
  whatsapp.value = "";
  comentario.value = "";
}