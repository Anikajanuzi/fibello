export const ADMIN_EMAIL = "hello@fibellosweets.com";

export const fallbackDesserts = [
  {
    id: crypto.randomUUID(),
    name: "Strawberry Cloud Cake",
    price: 34,
    description: "Soft vanilla sponge, berry cream, and glossy strawberry finish.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: crypto.randomUUID(),
    name: "Chocolate Velvet Tart",
    price: 18,
    description: "Dark ganache in a crisp cocoa shell with caramel pearls.",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: crypto.randomUUID(),
    name: "Macaron Gift Box",
    price: 24,
    description: "Pastel macarons filled with pistachio, rose, lemon, and fudge.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: crypto.randomUUID(),
    name: "Caramel Cream Puffs",
    price: 16,
    description: "Airy choux pastry with caramel cream and sugar dust.",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80"
  }
];

export function getDesserts() {
  const saved = localStorage.getItem("fibelloDesserts");
  if (!saved) {
    localStorage.setItem("fibelloDesserts", JSON.stringify(fallbackDesserts));
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
