// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let val = "";
  for(let i = str.length-1; i >= 0; i--) {
    val += str[i];
  }
  return val;
}

// ES6 for...of:
/*
function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed += character;
  }
  return reversed;
}
*/

/* ES6:
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
*/

// The easiest but not most obvious solution:
// return str.split('').reverse().join('')

module.exports = reverse;
