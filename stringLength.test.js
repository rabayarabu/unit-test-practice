const stringLength = require('./stringLength.js');
describe('stringLength function', () => {
    test('returns the exact length of a string', () => {
        const string = "Rabu";
        const length = string.length;
        expect(stringLength(string)).toBe(length);
      });

    test('string length is too short', () => {
    const string = "";
    const error = "String length must be between 1 to 10";
    expect(stringLength(string)).toBe(error);
    });

    test('string length is out of range', () => {
        const string = "Large string.";
        const error = "String length must be between 1 to 10";
        expect(stringLength(string)).toBe(error);
      });

})
