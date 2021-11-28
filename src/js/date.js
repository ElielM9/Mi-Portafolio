const date = document.querySelector(`.date`);

function actualDate() {
  let dateDay = new Date().getFullYear();
  date.textContent = dateDay;
}
