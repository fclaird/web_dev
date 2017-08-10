function test(num1, num2) {
    if (num1 % 2 === 0 || num2 % 2 === 0 && (num1 < 9 && num2 < 9)) {
        return true;
    } else {
        return false;
    }
}

function ternary(num1, num2) {
    let val = num1 % 2 === 0 || num2 % 2 === 0 && (num1 < 9 && num2 < 9) ? true : false;
    return val;
}
console.log(test(2, 3));
console.log(ternary(2, 3));
console.log(test(5, 3));
console.log(ternary(5, 3));
console.log(test(2, 12));
console.log(ternary(2, 12));