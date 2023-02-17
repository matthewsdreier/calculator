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
    switch(operator) {
        case "add":
            return add(a, b);
            break;
        case "subtract":
            return subtract(a, b);
            break;
        case "multiply":
            return multiply(a, b);
            break;
        case "divide":
            return divide(a, b);
            break;
    }
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

let a = "";
let b = "";
let ans = null;
let operator = null;

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", function() {
    if (this.textContent === "clear") {
        clearCalculator();
        return null;
    }

    if (this.classList[0] === "operator") {
        if (a === "" && b === "") {
            return null;
        } else if (b != "") {
            let tempOperator = this.classList[1];
            let tempAns = operate(a, b, operator);
            clearCalculator();
            a = tempAns;
            operator = tempOperator;
        } else {
            operator = this.classList[1];
            updateDisplay(this.textContent);
        }
    }

    if (this.classList[0] === "number") {
        if (operator === null) {
            a += this.textContent;
            updateDisplay(this.textContent);
        } else {
            b += this.textContent;
            updateDisplay(this.textContent);
        }

        // need to add clear calc if equals in on screen here
    }

    if (this.classList[0] === "equals") {
        ans = operate(a, b, operator)
        updateDisplay(this.textContent + ans);
    }

}));