`use strict`;
//GALERÍA
const workItems = document.querySelectorAll(".work .item");
const workItemsCount = workItems.length;
let currentIndex = 0;
//BOTONES GALERÍA
const closeButton = document.querySelector("#close-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

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
