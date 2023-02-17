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
        error = true;
        return "ERROR";
    }

    return a / b;
}

let operate = function(a, b, operator) {
    nDecimals = 4;
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case "add":
            return Math.round(add(a, b) * 10 ** nDecimals) / 10 ** nDecimals;
            break;
        case "subtract":
            return Math.round(subtract(a, b) * 10 ** nDecimals) / 10 ** nDecimals;
            break;
        case "multiply":
            return Math.round(multiply(a, b) * 10 ** nDecimals) / 10 ** nDecimals;
            break;
        case "divide":
            return Math.round(divide(a, b) * 10 ** nDecimals) / 10 ** nDecimals;
            break;
    }
}

let updateDisplay = function(text) {
    display.textContent = display.textContent + text;
}

let clearCalculator = function() {
    a = "";
    b = "";
    operator = null;
    display.textContent = "";
    equals = false;
    error = false;
}

let a = "";
let b = "";
let error = false;
let operator = null;
let equals = false;

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", function() {
    if (this.textContent === "clear") {
        clearCalculator();
        return null;
    }

    if (error) {
        clearCalculator();
    }

    if (this.classList[0] === "operator") {
        if (a === "" && b === "") {
            return null;
        } else if (b != "") {
            let tempOperator = this.classList[1];
            let tempAns = operate(a, b, operator);
            clearCalculator();
            a = tempAns;
            b = "";
            operator = tempOperator;
            updateDisplay(a + this.textContent);
        } else {
            operator = this.classList[1];
            updateDisplay(this.textContent);
        }
    }

    if (this.classList[0] === "negate") {
        if (a === "") {
            a += "-";
            updateDisplay("-");
        } else if (operator) {
            b += "-";
            updateDisplay("-");
        } else {
            return null;
        }
    }

    if (this.classList[0] === "number") {
        if (equals) {
            clearCalculator();;
        }
        
        if (operator === null) {
            a += this.textContent;
            updateDisplay(this.textContent);
        } else {
            b += this.textContent;
            updateDisplay(this.textContent);
        }
    }

    if (this.classList[0] === "equals") {
        if (b === "") {
            return null;
        }
        equals = true;
        let ans = operate(a, b, operator)
        updateDisplay(this.textContent + ans);
    }

}));