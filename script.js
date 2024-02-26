let calculation = localStorage.getItem("calculation") || "";

displayCalculation();

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  displayCalculation();
}

function displayCalculation() {
  document.querySelector(".js-display-calculation").innerHTML = calculation;
}
