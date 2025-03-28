function calc(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return "Операция невозможна";
    }

    if (num1 % 2 === 0 && num2 % 2 === 0) {
        return num1 + num2;
    }

    return num1 - num2;
}

console.log(calc(4, 6));  
console.log(calc(3, 5));  
console.log(calc(0, 5));  
