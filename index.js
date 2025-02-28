function init() {

  // Constantes del menú principal

  const hamburguer = document.querySelector('.hamburger');
  const cerrarMenu = document.querySelector('.close');
  const menu = document.querySelector('.menu-navegacion');

  // Constante para el contador, el like y el no like

  const like = document.querySelector('.icofont-thumbs-up');
  const contador = document.querySelector('.contador');

  // Evento click oara el menú principal

  hamburguer.addEventListener('click', () => {
    menu.classList.add('spread');
  });

  cerrarMenu.addEventListener('click', ()=> {
    menu.classList.remove('spread');
  });

  // Evento click con condicional para los menú de navegación principal

  window.addEventListener('click', (e) => {
    if (menu.classList.contains('spread') && e.target != menu &&
      e.target != hamburguer) {
      menu.classList.toggle('spread');
    }
  });

  // Creando el contador para el icono de like y no like


}
window.onload = init();