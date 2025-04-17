const isEven = require('./utils');

test('returns true for even number', () => {
  expect(isEven(4)).toBe(true);
});

test('returns false for odd number', () => {
  expect(isEven(5)).toBe(false);
});

test('throws error for non-number input', () => {
  expect(() => isEven('hello')).toThrow('Input must be a number');
});
