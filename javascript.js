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