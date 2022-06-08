function stringLength(string = ""){
    return string.length;
}

const reverseString = (string) => {
    const arr = string.split('');
    return arr.reverse().join('');
}

const calculator = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length);
}

module.exports = { stringLength, reverseString, calculator, capitalize };