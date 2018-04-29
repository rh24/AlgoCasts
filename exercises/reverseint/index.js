// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  reversed = n.toString().split('').reverse().join('');
  return Math.sign(n) * parseInt(reversed);
}
// parseInt() will lose 0's at front
// "-" will also be lost.
// e.g. -005 //=> 5

reverseInt(100);

module.exports = reverseInt;
