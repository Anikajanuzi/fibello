export const ADMIN_EMAIL = "hello@fibellosweets.com";
const DESSERT_SEED_VERSION = "mock-v3";

function mockDessertSvg(title, topColor, baseColor, accentColor, shape = "cake") {
  const pastry =
    shape === "macaron"
      ? `<g>
          <ellipse cx="360" cy="290" rx="178" ry="82" fill="${baseColor}"/>
          <path d="M202 290c58 35 110 42 158 42s102-7 158-42v35c-38 44-94 66-158 66s-120-22-158-66z" fill="${topColor}"/>
          <rect x="202" y="286" width="316" height="26" rx="13" fill="#fff8ed"/>
        </g>`
      : shape === "tart"
        ? `<g>
            <ellipse cx="360" cy="350" rx="184" ry="46" fill="${baseColor}"/>
            <ellipse cx="360" cy="315" rx="160" ry="86" fill="${topColor}"/>
            <circle cx="305" cy="286" r="24" fill="${accentColor}"/>
            <circle cx="360" cy="270" r="28" fill="#fff8ed"/>
            <circle cx="419" cy="292" r="22" fill="${accentColor}"/>
          </g>`
        : shape === "cupcake"
          ? `<g>
              <path d="M252 280h216l-28 112H280z" fill="${baseColor}"/>
              <path d="M255 286c8-72 58-102 105-82 43-36 104-4 104 66 0 44-43 66-104 66s-105-16-105-50z" fill="${topColor}"/>
              <circle cx="360" cy="191" r="23" fill="${accentColor}"/>
            </g>`
          : `<g>
              <rect x="220" y="215" width="280" height="160" rx="42" fill="${baseColor}"/>
              <path d="M220 245c38 35 62-23 102 8 34 26 63-24 96 0 40 28 61-24 82-1v-37H220z" fill="${topColor}"/>
              <circle cx="292" cy="195" r="28" fill="${accentColor}"/>
              <circle cx="360" cy="184" r="31" fill="${topColor}"/>
              <circle cx="431" cy="198" r="27" fill="${accentColor}"/>
            </g>`;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 540">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#fff8ed"/>
          <stop offset="1" stop-color="${accentColor}"/>
        </linearGradient>
      </defs>
      <rect width="720" height="540" fill="url(#bg)"/>
      <ellipse cx="360" cy="405" rx="210" ry="34" fill="#3b211b" opacity=".16"/>
      ${pastry}
      <text x="360" y="465" text-anchor="middle" font-family="Georgia, serif" font-size="42" font-weight="700" fill="#3b211b">${title}</text>
    </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const fallbackDesserts = [
  {
    id: crypto.randomUUID(),
    name: "Mock Strawberry Cloud Cake",
    price: 32,
    description: "Placeholder cake item with berry cream styling for the shop display.",
    image: mockDessertSvg("Berry Cake", "#ffc2d3", "#f0b36b", "#ef1c2a", "cake")
  },
  {
    id: crypto.randomUUID(),
    name: "Mock Chocolate Velvet Tart",
    price: 18,
    description: "Placeholder tart with ganache tones until real product photos are added.",
    image: mockDessertSvg("Choco Tart", "#7b4334", "#3b211b", "#c9854f", "tart")
  },
  {
    id: crypto.randomUUID(),
    name: "Mock Macaron Gift Box",
    price: 24,
    description: "Placeholder pastel gift box for browsing and ordering flow previews.",
    image: mockDessertSvg("Macarons", "#ffd3bd", "#ffc2d3", "#f7df7a", "macaron")
  },
  {
    id: crypto.randomUUID(),
    name: "Mock Caramel Cream Puffs",
    price: 16,
    description: "Placeholder cream puff set with caramel coloring and soft bakery styling.",
    image: mockDessertSvg("Cream Puffs", "#fff0cc", "#d99b62", "#ffd3bd", "cupcake")
  },
  {
    id: crypto.randomUUID(),
    name: "Mock Lemon Meringue Slice",
    price: 14,
    description: "Placeholder lemon pastry with bright citrus color and soft cream peaks.",
    image: mockDessertSvg("Lemon Slice", "#fff0cc", "#f7df7a", "#ffd3bd", "tart")
  },
  {
    id: crypto.randomUUID(),
    name: "Mock Pistachio Rose Cupcake",
    price: 12,
    description: "Placeholder cupcake for a floral, playful bakery shelf preview.",
    image: mockDessertSvg("Rose Cup", "#ffc2d3", "#8fbf8f", "#ef1c2a", "cupcake")
  },
  {
    id: crypto.randomUUID(),
    name: "Mock Tiramisu Dream Jar",
    price: 15,
    description: "Placeholder layered dessert jar with cocoa and vanilla tones.",
    image: mockDessertSvg("Tiramisu", "#fff0cc", "#7b4334", "#c9854f", "cake")
  },
  {
    id: crypto.randomUUID(),
    name: "Mock Berry Cheesecake Bite",
    price: 10,
    description: "Placeholder mini cheesecake with berry topping for the home cards.",
    image: mockDessertSvg("Cheesecake", "#fff8ed", "#ffc2d3", "#ef1c2a", "tart")
  }
];

export function getDesserts() {
  const saved = localStorage.getItem("fibelloDesserts");
  const seedVersion = localStorage.getItem("fibelloDessertSeedVersion");
  if (!saved || seedVersion !== DESSERT_SEED_VERSION) {
    localStorage.setItem("fibelloDesserts", JSON.stringify(fallbackDesserts));
    localStorage.setItem("fibelloDessertSeedVersion", DESSERT_SEED_VERSION);
    return fallbackDesserts;
  }
  return JSON.parse(saved);
}

export function saveDesserts(desserts) {
  localStorage.setItem("fibelloDesserts", JSON.stringify(desserts));
}

export function money(value) {
  return Number(value).toLocaleString("en-US", { style: "currency", currency: "USD" });
}
