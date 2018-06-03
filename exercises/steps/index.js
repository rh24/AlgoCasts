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

// function steps(n) {
  // my first solution:
  // let str = '';
  // let hash = '#';
  // let space = ' ';
  //
  // for (let i = 1; i <= n; i++) {
  //   str += hash.repeat(i) // i number of times
  //   space = space.repeat(n-i);
  //   str += space;
  //   console.log(str);
  //   space = ' ';
  //   str = '';
  // }
// }

// two for loops solution (iterative solution):
// do it iteratively and turn the for loop start/stop/iteration into recursive solutions;
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//
//     console.log(stair);
//   }
// }

// recursive solution:
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1); // or:
    // return;
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}
module.exports = steps;
