// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w/]/g, '').toLowerCase().split('').sort().join('');
}

// function anagrams(stringA, stringB) {
//   let regStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   let regStringB = stringB.replace(/[^\w]/g, "").toLowerCase();
//
//   let charMapA = {};
//   let charMapB = {};
//   let answer = false;
//
//   if (regStringA.length === regStringB.length) {
//     for (let char of regStringA) {
//       if (!Object.keys(charMapA).includes(char)) {
//         charMapA[char] = 1;
//       } else {
//         charMapA[char] += 1;
//       }
//     }
//
//     for (let char of regStringB) {
//       if (!Object.keys(charMapB).includes(char)) {
//         charMapB[char] = 1;
//       } else {
//         charMapB[char] += 1;
//       }
//     }
//
//     for (let char in charMapA) {
//       if (charMapA[char] === charMapB[char]) {
//         answer = true;
//       } else {
//         answer = false;
//       }
//     };
//   }
//
//   return answer;
// }

module.exports = anagrams;
// below is helper function for building charMap
// function buildCharMap(str) {
//
// }
