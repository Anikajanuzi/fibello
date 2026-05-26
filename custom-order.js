import { money } from "./data.js";

const cakeForm = document.querySelector("#cake-form");
const cakePreview = document.querySelector("#cake-preview");
const cakeTextPreview = document.querySelector("#cake-text-preview");
const candlesPreview = document.querySelector("#candles-preview");
const cakePrice = document.querySelector("#cake-price");
const toppingPreview = document.querySelector("#topping-preview");
const drizzlePreview = document.querySelector("#drizzle-preview");
const decorationPreview = document.querySelector("#decoration-preview");

const icingColors = {
  "Vanilla Cream": "#fff0cc",
  "Chocolate Ganache": "#7b4334",
  "Strawberry Buttercream": "#ffc2d3",
  "Caramel Whip": "#d99b62"
};

const cakeColors = {
  "Vanilla Bean": "#f5d49b",
  "Chocolate Fudge": "#633329",
  "Red Velvet": "#9f2230",
  "Lemon Cloud": "#f7df7a"
};

const shapeClasses = {
  Round: "shape-round",
  Square: "shape-square",
  Heart: "shape-heart",
  Custom: "shape-custom"
};

function updateCake() {
  const data = new FormData(cakeForm);
  const shape = data.get("shape");
  const layers = Number(data.get("layers"));
  const size = Number(data.get("size"));
  const candles = Number(data.get("candles"));
  const text = data.get("text").trim() || "Fibello";
  const decorations = data.get("decorations");
  const toppings = data.get("toppings");
  const base = 28 + size * 3 + layers * 9 + candles * 1.5 + (toppings === "Fruit Crown" ? 8 : 5);
  const stackHeight = 76 + (layers - 1) * 64;

  cakePreview.style.setProperty("--icing", icingColors[data.get("icing")]);
  cakePreview.style.setProperty("--cake-color", cakeColors[data.get("flavor")]);
  cakePreview.style.setProperty("--cake-scale", String(0.92 + size / 40));
  cakePreview.style.setProperty("--topping-bottom", `${stackHeight + 14}px`);
  cakePreview.style.setProperty("--drizzle-bottom", `${stackHeight - 18}px`);
  cakePreview.style.setProperty("--decoration-bottom", `${Math.max(30, stackHeight - 84)}px`);
  cakePreview.classList.remove(...Object.values(shapeClasses));
  cakePreview.classList.add(shapeClasses[shape]);
  cakePreview.querySelector(".layer-one").classList.toggle("hidden-layer", layers < 1);
  cakePreview.querySelector(".layer-two").classList.toggle("hidden-layer", layers < 2);
  cakePreview.querySelector(".layer-three").classList.toggle("hidden-layer", layers < 3);
  cakeTextPreview.style.bottom = `${Math.max(28, stackHeight * 0.32)}px`;
  candlesPreview.style.bottom = `${stackHeight + 26}px`;
  cakeTextPreview.textContent = text;
  candlesPreview.innerHTML = Array.from({ length: Math.min(candles, 6) }, () => "<i></i>").join("");
  toppingPreview.innerHTML = toppingMarkup(toppings);
  drizzlePreview.className = `drizzle-preview ${decorations === "Chocolate Drizzle" ? "show-drizzle" : ""}`;
  decorationPreview.innerHTML = decorationMarkup(decorations);
  cakePrice.textContent = money(base);
}

function toppingMarkup(toppings) {
  const options = {
    Macarons: ["macaron", "macaron peach", "macaron cocoa"],
    Truffles: ["truffle", "truffle", "truffle"],
    "Fruit Crown": ["berry", "citrus", "berry", "citrus"],
    "Cookie Crumble": ["crumb", "crumb", "crumb", "crumb", "crumb"]
  };

  return options[toppings].map((item) => `<span class="${item}"></span>`).join("");
}

function decorationMarkup(decorations) {
  if (decorations === "Fresh Berries") {
    return '<span class="berry decor-left"></span><span class="berry decor-right"></span>';
  }
  if (decorations === "Gold Sprinkles") {
    return Array.from({ length: 16 }, (_, index) => `<span class="sprinkle" style="--i:${index}"></span>`).join("");
  }
  if (decorations === "Floral Piping") {
    return '<span class="flower decor-left"></span><span class="flower decor-mid"></span><span class="flower decor-right"></span>';
  }
  return "";
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
