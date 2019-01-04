import salesByWeek from "./carData";

const carToDom = {
  printToDom () {
    const targetContainer = document.querySelector(".output");
    const inputBox = document.createElement("input");
    inputBox.setAttribute("id","searchInput");
    targetContainer.appendChild(inputBox);
    const searchInput = document.querySelector("#searchInput");
    searchInput.addEventListener("keypress", event => {
      if (event.charCode === 13) {
        const foundDealer = salesByWeek.find(element =>
           element.sales_agent.first_name.includes(event.target.value)
        );

        console.log(foundDealer);
        
      }
    });

    
    // salesByWeek.forEach(sale => {
    //   // console.log(sale);
    //   const saleContainer = document.createElement("article");
    //   saleContainer.classList.add("sales-container");
    //   targetContainer.appendChild(saleContainer);
    //   const salesPerson = document.createElement("h2");
    //   salesPerson.classList.add("salesPerson")
    //   salesPerson.textContent = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`
    //   saleContainer.appendChild(salesPerson);

    //   for (const entry of Object.entries(sale.vehicle)) {
    //     // console.log(entry);
    //     const saleInfo = document.createElement("p");
    //     saleInfo.textContent = `${entry[0]}: ${entry[1]}`
    //     saleContainer.appendChild(saleInfo);
    //   };
    //   const profit = document.createElement("h2");
    //   profit.classList.add("profit-container")
    //   profit.textContent= `Profit: $${sale.gross_profit}`;
    //   saleContainer.appendChild(profit);
    //   saleContainer.appendChild(document.createElement("hr"));
    // })
  },
};

export default carToDom
