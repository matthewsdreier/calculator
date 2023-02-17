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

const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", function() {
    updateDisplay(this.textContent);
}));