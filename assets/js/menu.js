//ABRIR, CERRAR MENÚ
const hamburguer = document.querySelector("#buttonOpenCloseMenu");
const menuMobile = document.querySelector(`#nav`);

//ABRIR Y CERRAR MENÚ
hamburguer.addEventListener("click", () => {
  menuMobile.classList.toggle(`exit`);
  menuMobile.classList.toggle(`entrance`);
});

