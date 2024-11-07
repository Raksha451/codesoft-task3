let display = document.getElementById("display");
let displayValue = "";

function appendNumber(number) {
  if (displayValue === "0" && number!== " .") {
    displayValue = number;
  } else {
    displayValue += number;
  }
  calculate();
}

function appendOperator(operator) {
    const lastChar=displayValue[displayValue.length-1];
  if ("+-*/%".includes(lastChar)) {
    displayValue = displayValue.slice(0, -1) + operator;
  } else {
    displayValue += operator;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1) || "0";
  calculate();
}

function calculate() {
  try {
    const lastChar=displayValue[displayValue.length-1];
    if (!"+-*/%".includes(lastChar)) {
        display.innerText=eval(displayValue)|| "0";
  } else{
    display.innerText=displayValue;
  }
}
  catch {
    display.innerText = "Error";
  }
}

function updateDisplay() {
  display.innerText = displayValue;
}