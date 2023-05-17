const { reverseString, capitalizeString } = require('./string.js') 

describe('reverseString function', () => {
    test('reverses a string', () => {
        const string = 'Hello, Rabu!';
        const reversed = reverseString(string);
        expect(reversed).toBe('!ubaR ,olleH');
    })
    
});

describe('capitalizeString function', () => {
    test('capitalizes the first character of a string', () => {
        const result = capitalizeString('rabu');
        expect(result).toBe('Rabu');
    })
  
});


