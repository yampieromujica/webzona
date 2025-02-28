function init() {

window.addEventListener('scroll', function () {
  let animacion = document.getElementById('animado');
  let posicionObj = animacion.getBoundingClientRect().top;
  console.log(posicionObj);
  let tamañoDePantalla = window.innerHeight / 1;

  if (posicionObj < tamañoDePantalla) {
    animacion.style.animation = 'translateDerecha 1s forwards linear'
  }
});

window.addEventListener('scroll', function () {
  let animacion2 = document.getElementById('texto__animado');
  let posicionObj7 = animacion2.getBoundingClientRect().top;
  console.log(posicionObj7);
  let tamañoDePantalla = window.innerHeight / 1;

  if (posicionObj7 < tamañoDePantalla) {
    animacion2.style.animation = ' translateLeft 1s forwards linear'
  }
});


window.addEventListener('scroll', function () {
  let icoAnimado = document.getElementById('ico__servicio-1');
  let posicionObj2 = icoAnimado.getBoundingClientRect().top;
  console.log(posicionObj2);
  let tamañoDePantalla = window.innerHeight / 2;

  if (posicionObj2 < tamañoDePantalla) {
    icoAnimado.style.animation = 'opacidad 1.5s forwards linear'
  }
});

window.addEventListener('scroll', function () {
  let icoAnimado2 = document.getElementById('ico__servicio-2');
  let posicionObj3 = icoAnimado2.getBoundingClientRect().top;
  console.log(posicionObj3);
  let tamañoDePantalla = window.innerHeight / 2;

  if (posicionObj3 < tamañoDePantalla) {
    icoAnimado2.style.animation = 'opacidad 1.5s forwards linear'
  }
});

window.addEventListener('scroll', function () {
  let icoAnimado3 = document.getElementById('ico__servicio-3');
  let posicionObj5 = icoAnimado3.getBoundingClientRect().top;
  console.log(posicionObj5);
  let tamañoDePantalla = window.innerHeight / 2;

  if (posicionObj5 < tamañoDePantalla) {
    icoAnimado3.style.animation = 'opacidad 1.5s forwards linear'
  }
});

window.addEventListener('scroll', function () {
  let icoAnimado4 = document.getElementById('ico__servicio-4');
  let posicionObj6 = icoAnimado4.getBoundingClientRect().top;
  console.log(posicionObj6);
  let tamañoDePantalla = window.innerHeight / 2;

  if (posicionObj6 < tamañoDePantalla) {
    icoAnimado4.style.animation = 'opacidad 1.5s forwards linear'
  }
});

window.addEventListener('scroll', function () {
  let animacion = document.getElementById('animado_8');
  let posicionObj8 = animacion.getBoundingClientRect().top;
  console.log(posicionObj8);
  let tamañoDePantalla = window.innerHeight / 2;

  if (posicionObj8 < tamañoDePantalla) {
    animacion.style.animation = 'opacity 1.5s forwards 1s ease-out'
  }
});


window.addEventListener('scroll', function () {
  let animacionPrecioImg = document.getElementById('animacionPrecioImg');
  let posicionObj9 = animacionPrecioImg.getBoundingClientRect().top;
  console.log(posicionObj9);
  let tamañoDePantalla = window.innerHeight / 1;

  if (posicionObj9 < tamañoDePantalla) {
    animacionPrecioImg.style.animation = ' translateLeft 1s forwards linear'
  }
});


window.addEventListener('scroll', function () {
  let animacionPrecioUl = document.getElementById('animacionPrecioUl');
  let posicionObj10 = animacionPrecioUl.getBoundingClientRect().top;
  console.log(posicionObj10);
  let tamañoDePantalla = window.innerHeight / 1;

  if (posicionObj10 < tamañoDePantalla) {
    animacionPrecioUl.style.animation = ' translateDerecha 1s forwards  linear'
  }
});



}

window.onload = init();