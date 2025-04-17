function f(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * f(n - 1);
  }
}

// Example usage:
console.log(f(5)); // Should print 120
