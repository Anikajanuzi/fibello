export const ADMIN_EMAIL = "hello@fibellosweets.com";
const DESSERT_SEED_VERSION = "fibello-sweets-v1";

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
    name: "Bueno Cake",
    image: "fibellosweets/sweets/bueno-cake.jpg"
  },
  {
    id: crypto.randomUUID(),
    name: "Cheesecake Toffee",
    image: "fibellosweets/sweets/cheesecake-toffee.jpg"
  },
  {
    id: crypto.randomUUID(),
    name: "Cheesecake",
    image: "fibellosweets/sweets/cheesecake.jpg"
  },
  {
    id: crypto.randomUUID(),
    name: "Krem Kadaif",
    image: "fibellosweets/sweets/krem-kadaif.jpg"
  },
  {
    id: crypto.randomUUID(),
    name: "Mallata",
    image: "fibellosweets/sweets/mallata.jpg"
  },
  {
    id: crypto.randomUUID(),
    name: "Pistachio Tiramisu",
    image: "fibellosweets/sweets/pistachio-tiramisu.jpg"
  },
  {
    id: crypto.randomUUID(),
    name: "Rafaello",
    image: "fibellosweets/sweets/rafaello.jpg"
  },
  {
    id: crypto.randomUUID(),
    name: "Cake 2",
    image: "fibellosweets/sweets/cake2.jpg"
  },
  {
    id: crypto.randomUUID(),
    name: "Cake 3",
    image: "fibellosweets/sweets/cake3.jpg"
  },
  {
    id: crypto.randomUUID(),
    name: "Cake 4",
    image: "fibellosweets/sweets/cake4.jpg"
  },
  {
    id: crypto.randomUUID(),
    name: "Cake 8",
    image: "fibellosweets/sweets/cake8.jpg"
  },
  {
    id: crypto.randomUUID(),
    name: "Cake 9",
    image: "fibellosweets/sweets/cake9.jpg"
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
