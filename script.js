let number1 = "";
let operator = "";
let number2 = "";
let displayValue = "";
let calculated = false;

function clear() {
  display("");
  number1 = "";
  number2 = "";
  operator = "";
  displayValue = "";
  calculated = false;
}

function multiply(a, b) {
  return a * b;
}
function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function percent(a, b) {
  return (a / b) * 100;
}
function exponent(a, b) {
  return a ** b;
}

function operate(num1, op, num2) {
  if (op == "-") {
    return subtract(num1, num2);
  } else if (op == "+") {
    return add(num1, num2);
  } else if (op == "x") {
    return multiply(num1, num2);
  } else if (op == "÷") {
    return divide(num1, num2);
  } else if (op == "%") {
    return percent(num1, num2);
  } else if (op == "^") {
    return exponent(num1, num2);
  }
}

function display(displayVal) {
  document.querySelector(".display").textContent = displayVal;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((item) => {
  item.addEventListener("click", () => {
    display(displayValue);
    if (calculated == true) {
      number1 = "";
      calculated = false;
    }
    if (operator !== "" && number1 !== "") {
      number2 += item.textContent;
      display(number2);
    } else {
      number1 += item.textContent;
      display(number1);
    }
  });
});

const operators = document.querySelectorAll(".operator");
console.log(operators);
operators.forEach((item) => {
  item.addEventListener("click", () => {
    display("");
    calculated = false;
    if (number1 !== "" && number2 !== "") {
      if (number1 !== 0 && number2 == "0" && operator == "/") {
        clear();
        display("😂");
        return;
      }
      display(operate(number1, operator, number2));
      number1 = operate(number1, operator, number2);
      number2 = "";
    }
    operator = item.textContent;
  });
});

document.querySelector("#clear").addEventListener("click", clear);

document.querySelector("#equal").addEventListener("click", () => {
  display("");
  if (number1 !== 0 && number2 == "0" && operator == "/") {
    clear();
    display("😂");
    return;
  }
  display(operate(number1, operator, number2));
  number1 = operate(number1, operator, number2);
  number2 = "";
  operator = "";
  calculated = true;
});
