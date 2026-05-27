import { getDesserts, money } from "./data.js";

const dessertGrid = document.querySelector("#dessert-grid");

function renderDesserts() {
  if (!dessertGrid) return;

  dessertGrid.innerHTML = getDesserts()
    .map(
      (dessert, index) => `
        <article class="dessert-card" style="--card-index: ${index}">
          <img src="${dessert.image}" alt="${dessert.name}">
          <div class="dessert-card-body">
            <h3>${dessert.name}</h3>
            <p>${dessert.description}</p>
            <span class="price">${money(dessert.price)}</span>
            <a class="frost-btn small" href="custom-order.html">Order Now</a>
          </div>
        </article>
      `
    )
    .join("");
}

renderDesserts();
