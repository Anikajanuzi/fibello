const branches = {
  "Los Angeles": {
    address: "842 Sweet Blossom Ave, Los Angeles, CA",
    hours: "Mon-Sat 9 AM-10 PM, Sun 10 AM-6 PM",
    contact: "(555) 019-1001"
  },
  Dallas: {
    address: "210 Caramel Lane, Dallas, TX",
    hours: "Mon-Sat 9 AM-9 PM, Sun 10 AM-5 PM",
    contact: "(555) 019-2100"
  },
  Chicago: {
    address: "77 Cocoa Market St, Chicago, IL",
    hours: "Tue-Sat 8 AM-9 PM, Sun 10 AM-6 PM",
    contact: "(555) 019-7733"
  },
  Miami: {
    address: "505 Peach Palm Blvd, Miami, FL",
    hours: "Daily 9 AM-10 PM",
    contact: "(555) 019-5050"
  }
};

const locationCard = document.querySelector("#location-card");

function renderLocation(city) {
  const branch = branches[city];
  locationCard.innerHTML = `
    <h2>${city}</h2>
    <p><strong>Address:</strong> ${branch.address}</p>
    <p><strong>Working hours:</strong> ${branch.hours}</p>
    <p><strong>Contact:</strong> ${branch.contact}</p>
    <a class="frost-btn primary" href="contact.html">Contact Branch</a>
  `;
}

document.querySelectorAll(".map-pin").forEach((pin) => {
  pin.addEventListener("click", () => {
    document.querySelectorAll(".map-pin").forEach((item) => item.classList.remove("active"));
    pin.classList.add("active");
    renderLocation(pin.dataset.city);
  });
});

renderLocation("Los Angeles");
