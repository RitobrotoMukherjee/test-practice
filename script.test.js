const { stringLength, reverseString, calculator, capitalize } = require('./main');

test("string length", () => {
    expect(stringLength("R")).toBeGreaterThanOrEqual(1);
    expect(stringLength("ABCDEFGGK")).toBeLessThanOrEqual(10);
});

test("Reverse String", () => {
    expect(reverseString("rito")).toBe("otir");
})

describe("Calculator", () => {
    test("Addition", () => {
        expect(calculator.add(1, 2)).toBe(3);
        expect(calculator.add(3, 4)).toBe(7);
        expect(calculator.add(5, 6)).toBe(11);
    });
    test("Substarction", () => {
        expect(calculator.substract(1, 2)).toBe(-1);
        expect(calculator.substract(4, 3)).toBe(1);
        expect(calculator.substract(7, 4)).toBe(3);
    })
    test("Multiplication", () => {
        expect(calculator.multiply(1, 2)).toBe(2);
        expect(calculator.multiply(3, 4)).toBe(12);
        expect(calculator.multiply(5, 12)).toBe(60);
    })
    test("Divide", () => {
        expect(calculator.divide(2, 1)).toBe(2);
        expect(calculator.divide(9, 3)).toBe(3);
        expect(calculator.divide(30, 10)).toBe(3);
    })
});

test("capitalize", () => {
    expect(capitalize('rito')).toBe('Rito');
})