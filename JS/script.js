function refrescarVentana() {
    location.reload();
  }

// Ajustar el margen superior del contenido al alto del menú fijo
var navHeight = document.querySelector('nav').offsetHeight;
document.querySelector('.content').style.marginTop = navHeight + 'px';