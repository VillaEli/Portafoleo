// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portafolio cargado correctamente.");
    // Agrega aquí funcionalidades como scroll suave
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  