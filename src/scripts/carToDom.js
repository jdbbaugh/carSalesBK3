import salesByWeek from "./carData";

const carToDom = {
  printToDom () {
    const targetContainer = document.querySelector(".output");
    salesByWeek.forEach(sale => {
      console.log(sale.sales_agent)
      const saleContainer = document.createElement("article");
      targetContainer.appendChild(saleContainer);
      const salesPerson = document.createElement("h1");
      salesPerson.textContent = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`
      saleContainer.appendChild(salesPerson);
    })
  }
};

export default carToDom
