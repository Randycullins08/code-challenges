// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function buildTower(floors) {
  const tower = [];

  for (let i = 0; i < floors; i++) {
    // Calculate the number of stars for the current floor
    const stars = "*".repeat(2 * i + 1);
    // Calculate the spaces needed on each side to center the stars
    const spaces = " ".repeat(floors - i - 1);
    // Combine spaces and stars to form the current floor
    tower.push(spaces + stars + spaces);
  }

  return tower;
}

// Example usage:
console.log(buildTower(3));
console.log(buildTower(6));
