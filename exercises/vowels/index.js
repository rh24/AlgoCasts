// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const letters = ['a', 'e', 'i', 'o', 'u']
  let matches;

  matches = str.match(/[aeiou]/gi);
  // if (!matches) {
  //   return 0;
  // } else {
  //   return matches.length;
  // }

  return matches ? matches.length : 0;
}

module.exports = vowels;
