const branches = {
  "Los Angeles": {
    address: "842 Sweet Blossom Ave, Los Angeles, CA",
    hours: "Mon-Sat 9 AM-10 PM, Sun 10 AM-6 PM",
    contact: "(555) 019-1001",
    mapClass: "map-los-angeles"
  },
  Dallas: {
    address: "210 Caramel Lane, Dallas, TX",
    hours: "Mon-Sat 9 AM-9 PM, Sun 10 AM-5 PM",
    contact: "(555) 019-2100",
    mapClass: "map-dallas"
  },
  Chicago: {
    address: "77 Cocoa Market St, Chicago, IL",
    hours: "Tue-Sat 8 AM-9 PM, Sun 10 AM-6 PM",
    contact: "(555) 019-7733",
    mapClass: "map-chicago"
  },
  Miami: {
    address: "505 Peach Palm Blvd, Miami, FL",
    hours: "Daily 9 AM-10 PM",
    contact: "(555) 019-5050",
    mapClass: "map-miami"
  },
  Phoenix: {
    address: "118 Sugar Sun Rd, Phoenix, AZ",
    hours: "Mon-Sat 8 AM-8 PM, Sun 10 AM-5 PM",
    contact: "(555) 019-8118",
    mapClass: "map-phoenix"
  },
  Atlanta: {
    address: "64 Sprinkle Grove, Atlanta, GA",
    hours: "Daily 9 AM-9 PM",
    contact: "(555) 019-6464",
    mapClass: "map-atlanta"
  }
};

const locationCard = document.querySelector("#location-card");
const citySelect = document.querySelector("#city-select");
const branchMap = document.querySelector("#branch-map");
const mapPins = document.querySelectorAll(".map-pin");

function populateCities() {
  citySelect.innerHTML = Object.keys(branches)
    .map((city) => `<option value="${city}">${city}</option>`)
    .join("");
}

function renderLocation(city) {
  const branch = branches[city];
  citySelect.value = city;
  branchMap.className = `map-canvas ${branch.mapClass}`;
  mapPins.forEach((pin) => pin.classList.toggle("active", pin.dataset.city === city));
  locationCard.innerHTML = `
    <h2>${city}</h2>
    <p><strong>Address:</strong> ${branch.address}</p>
    <p><strong>Working hours:</strong> ${branch.hours}</p>
    <p><strong>Contact:</strong> ${branch.contact}</p>
    <a class="frost-btn primary" href="contact.html">Contact Branch</a>
  `;
}

mapPins.forEach((pin) => {
  pin.addEventListener("click", () => {
    renderLocation(pin.dataset.city);
  });
});

citySelect.addEventListener("change", (event) => renderLocation(event.target.value));

populateCities();
renderLocation("Los Angeles");
