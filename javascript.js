let add = function(a, b) {
    return a + b;
}

let subtract = function(a, b) {
    return a - b;
}

let multiply = function(a, b) {
    return a * b;
}

let divide = function(a, b) {
    if (b === 0) {
        return "ERROR";
    }

    return a / b;
}

let operate = function(a, b, operator) {
    return window[operator](a, b);
}

let updateDisplay = function(text) {
    display.textContent = display.textContent + text;
}

let clearCalculator = function() {
    a = null;
    b = null;
    operator = null;
    display.textContent = "";
}

let a = null;
let b = null;
let operator = null;

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const equals = document.querySelector(".equals");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");

buttons.forEach(button => button.addEventListener("click", function() {
    if (this.textContent != "clear") {
        updateDisplay(this.textContent);
    }

    if (this.classList[0] === "operator") {
        operator = this.classList[1];
    }

}));

clear.addEventListener("click", clearCalculator);
