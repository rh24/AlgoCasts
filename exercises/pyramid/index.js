// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, column = 0, level = '') {
  const midpoint = Math.floor((n * 2 - 1) / 2);

  if (n === row) {
    return;
  }

  if ((n * 2 - 1) === level.length) {
    console.log(level);
    pyramid(n, row+1);
    return;
  }

  if (midpoint - row <= column && midpoint + row >= column) {
    level += '#';
  } else {
    level += ' ';
  }

  pyramid(n, row, column+1, level);
}

// function pyramid(n, row = 0, level = '') {
//   const midpoint = Math.floor((n * 2 - 1) / 2);
//   let add;
//
//   if (n === row) {
//     return;
//   }
//
//   if ((n * 2 - 1) === level.length) {
//     console.log(level);
//     pyramid(n, row+1);
//     return;
//   }
//
//   if (midpoint - row <= column && midpoint + row >= column) {
//     add += '#';
//   } else {
//     add += ' ';
//   }
//
//   pyramid(n, row, column+1, level);
// }

module.exports = pyramid;
