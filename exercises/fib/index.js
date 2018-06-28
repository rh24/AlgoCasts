// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// recursive solution:

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {

  // this solution is of exponential runtime:
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);

  // in order to improve the runtime, implement memoization:

}

const fib = memoize(slowFib);

// iterative solution:

// function fib(n) {
//   let a = 0;
//   let b = 1;
//   let start = [0, 1];
//
//   for (let i = 1; i < n; i++) {
//     start.push(start[a] + start[b])
//     a++;
//     b++;
//   }
//
//   return start[n];
//
// }

module.exports = fib;
