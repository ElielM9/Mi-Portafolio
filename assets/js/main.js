//GALERÍA
const workItems = document.querySelectorAll(".work .item");
const workItemsCount = workItems.length;
let currentIndex = 0;
//BOTONES GALERÍA
const closeButton = document.querySelector("#close-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
//ABRIR, CERRAR MENÚ
const openCloseButton = document.querySelector("#buttonOpenCloseMenu");
const menuMobileItems = document.querySelector("#menu-mobile-items");
//ANIMACION TEXTO 
const typed = new Typed(".typed", {
  strings: ["FRONT-END DEVELOPER"],

  stringsElement: "#cadenas-texto", // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: "|", // Caracter para el cursor
  contentType: "html", // 'html' o 'null' para texto sin formato
});

//ABRIR Y CERRAR MENÚ
openCloseButton.addEventListener("click", (e) => {
  menuMobileItems.classList.toggle("menu-mobile-closed");
});

//GALERIA
workItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = parseInt(item.getAttribute("data-id"));
    const contentArr = document.querySelectorAll("#details-container .item");

    document.querySelectorAll("#details-container .item").forEach((item) => {
      item.classList.add("item-hide");
    });
    document
      .querySelectorAll("#details-container .item")
      [currentIndex].classList.toggle("item-hide");
    document.querySelector("#screen").style["animation-name"] = "fade-in";
    document.querySelector("body").style["overflow"] = "hidden";

    setTimeout(() => {
      document.querySelector("#details-container").style.display = "block";
    }, 1000);
    setTimeout(() => {
      document.querySelector("#screen").style = "";
    }, 1000);
  });
});

//BOTON DE CERRAR
closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#screen").style["animation-name"] = "fade-in";
  document.querySelector("body").style["overflow"] = "auto";

  setTimeout(() => {
    document.querySelector("#details-container").style.display = "none";
  }, 1000);
  setTimeout(() => {
    document.querySelector("#screen").style = "";
  }, 1000);
});
//BOTON ATRÁS

prevButton.addEventListener("click", (e) => {
  if (currentIndex - 1 < 0) {
    return;
  }
  currentIndex--;
  loadGalleryItem(currentIndex);
});

//BOTON DE SIGUIENTE
nextButton.addEventListener("click", (e) => {
  if (currentIndex + 1 == workItemsCount) {
    return;
  }
  currentIndex++;
  loadGalleryItem(currentIndex);
});

function loadGalleryItem(index) {
  const items = document.querySelectorAll("#details-container .item");
  items.forEach((item) => {
    item.classList.add("item-hide");
  });
  items[index].classList.toggle("item-hide");
}
