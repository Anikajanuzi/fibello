import { money } from "./data.js";

const cakeForm = document.querySelector("#cake-form");
const cakePreview = document.querySelector("#cake-preview");
const cakeTextPreview = document.querySelector("#cake-text-preview");
const candlesPreview = document.querySelector("#candles-preview");
const cakePrice = document.querySelector("#cake-price");

const icingColors = {
  "Vanilla Cream": "#fff0cc",
  "Chocolate Ganache": "#7b4334",
  "Strawberry Buttercream": "#ffc2d3",
  "Caramel Whip": "#d99b62"
};

function updateCake() {
  const data = new FormData(cakeForm);
  const shape = data.get("shape");
  const layers = Number(data.get("layers"));
  const size = Number(data.get("size"));
  const candles = Number(data.get("candles"));
  const text = data.get("text").trim() || "Fibello";
  const base = 28 + size * 3 + layers * 9 + candles * 1.5;

  cakePreview.style.setProperty("--icing", icingColors[data.get("icing")]);
  cakePreview.style.setProperty("--cake-radius", shape === "Square" ? "18px" : shape === "Heart" ? "50% 50% 22px 22px" : "50%");
  cakePreview.querySelector(".layer-two").style.display = layers >= 2 ? "block" : "none";
  cakePreview.querySelector(".layer-three").style.display = layers >= 3 ? "block" : "none";
  cakeTextPreview.textContent = text;
  candlesPreview.innerHTML = Array.from({ length: Math.min(candles, 6) }, () => "<i></i>").join("");
  cakePrice.textContent = money(base);
}

function setDateMinimum() {
  const soonest = new Date();
  soonest.setDate(soonest.getDate() + 3);
  cakeForm.elements.date.min = soonest.toISOString().split("T")[0];
}

cakeForm.addEventListener("input", updateCake);

cakeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const orders = JSON.parse(localStorage.getItem("fibelloOrders") || "[]");
  orders.push(Object.fromEntries(new FormData(cakeForm).entries()));
  localStorage.setItem("fibelloOrders", JSON.stringify(orders));
  window.location.href = "confirmation.html";
});

setDateMinimum();
updateCake();
