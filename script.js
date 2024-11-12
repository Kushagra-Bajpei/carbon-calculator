document.addEventListener('DOMContentLoaded', () => {
  // Personal Carbon Calculator
  const personalForm = document.getElementById('personal-calculator-form');
  const personalResult = document.getElementById('personal-result');
  
  personalForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const transportation = parseFloat(document.getElementById('personal-transportation').value) || 0;
    const energy = parseFloat(document.getElementById('personal-energy').value) || 0;
    const diet = parseFloat(document.getElementById('personal-diet').value) || 0;

    const personalFootprint = (transportation * 0.21) + (energy * 0.233) + (diet * 0.04); // Sample multipliers for carbon
    personalResult.textContent = `Your personal carbon footprint is: ${personalFootprint.toFixed(2)} kg CO2`;
  });

  // Traveling Carbon Calculator
  const travelingForm = document.getElementById('traveling-calculator-form');
  const travelingResult = document.getElementById('traveling-result');

  travelingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const distance = parseFloat(document.getElementById('traveling-distance').value) || 0;
    const mode = document.getElementById('traveling-mode').value;
    const passengers = parseFloat(document.getElementById('traveling-passengers').value) || 1;

    let multiplier;
    switch (mode) {
      case 'car':
        multiplier = 0.21;
        break;
      case 'plane':
        multiplier = 0.15;
        break;
      case 'train':
        multiplier = 0.05;
        break;
      case 'bus':
        multiplier = 0.08;
        break;
      default:
        multiplier = 0;
    }

    const travelingFootprint = (distance * multiplier) / passengers;
    travelingResult.textContent = `Your traveling carbon footprint is: ${travelingFootprint.toFixed(2)} kg CO2`;
  });

  // Waste Carbon Calculator
  const wasteForm = document.getElementById('waste-calculator-form');
  const wasteResult = document.getElementById('waste-result');

  wasteForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const wasteAmount = parseFloat(document.getElementById('waste-amount').value) || 0;

    const wasteFootprint = wasteAmount * 0.5; // Assume 0.5kg CO2 per kg of waste
    wasteResult.textContent = `Your waste carbon footprint is: ${wasteFootprint.toFixed(2)} kg CO2 per week`;
  });

  // Offset Calculator
  const offsetForm = document.getElementById('offset-calculator-form');
  const offsetAmount = document.getElementById('offset-amount');

  offsetForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const totalFootprint = parseFloat(document.getElementById('total-carbon-footprint').value) || 0;
    const offsetType = document.getElementById('offset-type').value;

    let offsetMultiplier;
    if (offsetType === 'tree-planting') {
      offsetMultiplier = 20; // Assume each tree offsets 20kg of CO2
    } else if (offsetType === 'renewable-energy') {
      offsetMultiplier = 100; // Assume a project can offset 100kg of CO2
    } else {
      offsetMultiplier = 0;
    }

    const offsetRequired = totalFootprint / offsetMultiplier;
    offsetAmount.textContent = `Your required offset amount is: ${offsetRequired.toFixed(2)} ${offsetType === 'tree-planting' ? 'trees' : 'energy credits'}`;
  });
});
