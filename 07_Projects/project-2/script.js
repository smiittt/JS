const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const GuidedResult = document.querySelector("#GuidedResult");

  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please Enter Valid Height!!!";
    GuidedResult.innerHTML = ""; // Clear previous result
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please Enter Valid Weight!!!";
    GuidedResult.innerHTML = ""; // Clear previous result
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2); // Calculate BMI
    results.innerHTML = `<span>${bmi}</span>`; // Display BMI

    const bmiValue = parseFloat(bmi); // Convert BMI back to a number for comparison

    // Use the bmiValue to guide the results
    if (bmiValue <= 18.6) {
      GuidedResult.innerHTML = "Under Weight";
    } else if (bmiValue > 18.6 && bmiValue <= 24.9) {
      GuidedResult.innerHTML = "Normal Range";
    } else {
      GuidedResult.innerHTML = "Over Weight";
    }
  }
});
