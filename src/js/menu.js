`use strict`;
//VARIABLES
const hamburguer = document.querySelector("#buttonOpenCloseMenu");
const nav = document.querySelector(`#nav`);
const links = document.querySelectorAll(`#nav a`);

function showMenu() {
  hamburguer.addEventListener(`click`, () => {

    nav.classList.toggle(`ocultar`);
  });
}

function closeMenu() {
  links.forEach((link) => {
    link.addEventListener(`click`, (e) => {
      console.log(e);

      if (e.target.tagName === `A`) {
        nav.classList.add(`ocultar`);
      }
    });
  });
}
