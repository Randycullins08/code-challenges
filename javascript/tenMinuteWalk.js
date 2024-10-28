// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  // Check if walk has exactly 10 directions
  if (walk.length !== 10) return false;

  // Initialize position variables
  let x = 0; // horizontal position (east/west)
  let y = 0; // vertical position (north/south)

  // Loop through each direction
  for (let direction of walk) {
    if (direction === "n") y += 1; // move north (increase y)
    else if (direction === "s") y -= 1; // move south (decrease y)
    else if (direction === "e") x += 1; // move east (increase x)
    else if (direction === "w") x -= 1; // move west (decrease x)
  }

  // Check if we are back at the starting point
  return x === 0 && y === 0;
}

// Test case 1: Walk is exactly 10 minutes and returns to the starting point
console.log(isValidWalk(["n", "s", "n", "s", "e", "w", "e", "w", "n", "s"])); // true

// Test case 2: Walk is exactly 10 minutes but does not return to the starting point
console.log(isValidWalk(["n", "n", "n", "s", "e", "w", "e", "w", "n", "s"])); // false

// Test case 3: Walk is less than 10 minutes, doesn't matter if it returns to start
console.log(isValidWalk(["n", "s", "e", "w"])); // false

// Test case 4: Walk is more than 10 minutes, doesn't matter if it returns to start
console.log(
  isValidWalk(["n", "s", "n", "s", "e", "w", "e", "w", "n", "s", "n", "s"])
); // false

// Test case 5: Valid walk with different directions but returns to start
console.log(isValidWalk(["n", "n", "e", "e", "s", "s", "w", "w", "n", "s"])); // true

// Test case 6: Walk that doesn't move from start but takes 10 minutes
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true

// Test case 7: Complex walk pattern that returns to start
console.log(isValidWalk(["e", "e", "w", "w", "n", "s", "n", "s", "n", "s"])); // true

// Test case 8: Walk has exactly 10 steps but ends up in a different position
console.log(isValidWalk(["n", "n", "n", "n", "s", "s", "e", "w", "e", "e"])); // false
