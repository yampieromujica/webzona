document.addEventListener("DOMContentLoaded", function () {

  const formulario = document.getElementById('newsletter');
  const mensajeError = document.getElementById('mensajeError');

  formulario.addEventListener('submit', function (e) {
    // Previene el envío del formulario para poder validarlo con Javascript

    let email = document.getElementById('email').value;

    // Validación de los campos

    if (email.trim() === '') {
      mensajeError.innerText = 'El campo email no puede estar vacío.';
      email.value = '';
      return;
    } else if (!email.includes('@')) {
      mensajeError.innerText = 'El campo email no es valido.';
      email.value = '';
      return;
    }

    // Si todo está correcto, se puede proceder a enviar el formulario o hacer alguna otra acción


    mensajeError.innerText = '¡Gracias, Tu email fue enviado con éxito!';

    email.value = '';
    return;

    formulario.submit();
  });


});