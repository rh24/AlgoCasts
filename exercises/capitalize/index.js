// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // let split = str.split(' ');
  // let capitalizedStr = '';

  // split.forEach(function (word) {
  //   capitalizedStr = capitalizedStr + word[0].toUpperCase() + word.slice(1) + ' ';
  // })
  //
  // return capitalizedStr.slice(0, capitalizedStr.length-1);

  return str.split(" ").map(function (el) {
    return el[0].toUpperCase() + el.slice(1);
  }).join(" ");
}

module.exports = capitalize;
