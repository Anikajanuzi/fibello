export const ADMIN_EMAIL = "hello@fibellosweets.com";
const DESSERT_SEED_VERSION = "mock-v2";

function mockDessertSvg(title, topColor, baseColor, accentColor) {
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
      <rect x="220" y="215" width="280" height="160" rx="42" fill="${baseColor}"/>
      <path d="M220 245c38 35 62-23 102 8 34 26 63-24 96 0 40 28 61-24 82-1v-37H220z" fill="${topColor}"/>
      <circle cx="292" cy="195" r="28" fill="${accentColor}"/>
      <circle cx="360" cy="184" r="31" fill="${topColor}"/>
      <circle cx="431" cy="198" r="27" fill="${accentColor}"/>
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
    image: mockDessertSvg("Berry Cake", "#ffc2d3", "#f0b36b", "#ef1c2a")
  },
  {
    id: crypto.randomUUID(),
    name: "Mock Chocolate Velvet Tart",
    price: 18,
    description: "Placeholder tart with ganache tones until real product photos are added.",
    image: mockDessertSvg("Choco Tart", "#7b4334", "#3b211b", "#c9854f")
  },
  {
    id: crypto.randomUUID(),
    name: "Mock Macaron Gift Box",
    price: 24,
    description: "Placeholder pastel gift box for browsing and ordering flow previews.",
    image: mockDessertSvg("Macarons", "#ffd3bd", "#ffc2d3", "#f7df7a")
  },
  {
    id: crypto.randomUUID(),
    name: "Mock Caramel Cream Puffs",
    price: 16,
    description: "Placeholder cream puff set with caramel coloring and soft bakery styling.",
    image: mockDessertSvg("Cream Puffs", "#fff0cc", "#d99b62", "#ffd3bd")
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
