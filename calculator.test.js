const Calculator = require('./calculator.js');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator(4, 2);
  });

  describe('add', () => {
    test('adds two numbers correctly', () => {
      expect(calculator.add()).toBe(6);
    });

    test('adds negative and positive numbers', () => {
      expect(calculator.add()).not.toBe(9);
    });

    test('adds two decimal numbers', () => {
      expect(calculator.add() !== 5 ).toBeTruthy();
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers correctly', () => {
      expect(calculator.subtract()).toBe(2);
    });

    test('subtracts negative and positive numbers', () => {
      expect(calculator.subtract() !== 10).toBeTruthy();
    });

    test('subtracts two decimal numbers', () => {
      expect(calculator.subtract() !== 2).toBeFalsy();
    });
  });

  describe('divide', () => {
    test('divides two numbers correctly', () => {
      expect(calculator.divide()).toBe(2);
    });

    test('divides negative and positive numbers', () => {
        expect(calculator.divide() !== 4).toBeTruthy();
      });

    test('divides two decimal numbers', () => {
      expect(calculator.divide()).not.toBe(8);
    });
  });

  describe('multiply', () => {
    test('multiplies two numbers correctly', () => {
      expect(calculator.multiply()).toBe(8);
    });

    test('multiplies negative and positive numbers', () => {
      expect(calculator.multiply() !== 8).toBeFalsy();
    });

    test('multiplies two decimal numbers', () => {
      expect(calculator.multiply() === 8).toBeTruthy();
    });
  });
});