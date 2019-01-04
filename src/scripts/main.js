import carToDom from "./carToDom"

carToDom.searchForSalesman();

const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("keypress",  (event) => {
  console.log(event.target.value)
  if (event.charCode === 13) {
    const searchTerm = event.target.value

    salesByWeek.forEach(sale => {

    });
  }
})