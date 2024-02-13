function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function devision(num1, num2) {
    return num1 / num2;
}

function calculator(value1, value2, operation) {

    if (operation === 'add') {
        const result = add(value1, value2);
        return result;
    }
    else if (operation === 'subtract') {
        const result = subtract(value1, value2);
        return result;
    }
    else if (operation === 'multiplication') {
        const result = multiply(value1, value2);
        return result;
    }
    else if (operation === 'devision') {
        const result = devision(value1, value2);
        return result;
    }
    else {
        return  "This Calculator only do ADD, Subtract, Multiplication, Devision";
    }

}

const result = calculator(6, 5, "percentage");
console.log("calculate the value: ", result)