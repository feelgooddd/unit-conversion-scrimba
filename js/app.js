const btnConvert = document.getElementById("conversion-btn");
const inputConvert = document.getElementById("conversion-input");
const cards = document.querySelectorAll(".converted-card");

// Define all conversions
const conversions = {
  "meters-feet": {
    title: "Length",
    from: "meters",
    to: "feet",
    metric: 3.28,
    imperial: 0.3048,
  },
  "liters-gallons": {
    title: "Volume",
    from: "liters",
    to: "gallons",
    metric: 0.264172,
    imperial: 3.78541,
  },
  "kilograms-pounds": {
    title: "Mass",
    from: "kilograms",
    to: "pounds",
    metric: 2.20462,
    imperial: 0.4536,
  },
};

// Conversion function that returns formatted strings
function convertStrings(conv) {
  const value = Number(inputConvert.value);

  const metricResult = value * conv.metric;
  const imperialResult = value * conv.imperial;

  const metricText = `${value} ${conv.from} → ${metricResult.toFixed(3)} ${
    conv.to
  }`;
  const imperialText = `${value} ${conv.to} → ${imperialResult.toFixed(3)} ${
    conv.from
  }`;

  return { metricText, imperialText };
}

// Main function to update all cards
function updateCards() {
  //loop through all entires inside the conversions object.
  Object.entries(conversions).forEach(([key, conv], index) => {
    const { metricText, imperialText } = convertStrings(conv);

    const card = cards[index];
    card.querySelector("h3").textContent = `${conv.title} (${key})`;
    card.querySelector("p").innerHTML = `${metricText}<br>${imperialText}`; // separate lines
  });
}

// Event listener for the button
btnConvert.addEventListener("click", () => {
  updateCards();
});

// --- Load page with default of input 1 ---
window.addEventListener("DOMContentLoaded", () => {
  inputConvert.value = 1; // default test value
  updateCards(1); // fill cards automatically
});

// Event listener for the input
inputConvert.addEventListener("input", () => {
  // remove non-digits
  inputConvert.value = inputConvert.value.replace(/\D/g, '');
});
