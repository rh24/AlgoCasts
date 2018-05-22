// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let str = '';
  let hash = '#';
  let space = ' ';

  for (let i = 1; i <= n; i++) {
    str += hash.repeat(i) // i number of times
    if (i >= 1) {
      space = space.repeat(n-i);
    } else {
      space = '';
    }
    str += space;
    console.log(str);
    space = ' ';
    str = '';
  }
}
module.exports = steps;
