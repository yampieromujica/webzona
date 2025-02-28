
document.addEventListener('DOMContentLoaded', function() {

  // Reemplaza 'tuModal' con el ID de tu modal
  var modal = document.getElementById('loader-page');

  // Verifica si el modal existe antes de intentar removerlo
  if (modal) {
    
    setTimeout(function() {
	        modal.style.display = 'none';
	  }, 1500);
	  
 // Oculta el modal
    // O, si prefieres eliminarlo del DOM:
    // modal.parentNode.removeChild(modal);
  }
});