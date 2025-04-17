/**
 * Calculates the factorial of a non-negative integer.
 * @param {number} number - A non-negative integer.
 * @returns {number} - The factorial of the input number.
 * @throws {Error} - If the input is not a non-negative integer.
 */
function calculateFactorial(number) {
  if (!Number.isInteger(number) || number < 0) {
    throw new Error('Input must be a non-negative integer.');
  }

  if (number === 0) {
    return 1;
  }

  return number * calculateFactorial(number - 1);
}

// Example usage:
console.log(calculateFactorial(5)); // Output: 120
