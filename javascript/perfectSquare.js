// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

// Examples ( Input --> Output )
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

function findNextSquare(sq) {
  // Find the square root of the number
  let sqrt = Math.sqrt(sq);

  // Check if the square root is an integer
  if (Number.isInteger(sqrt)) {
    // Return the next perfect square
    let nextNum = sqrt + 1;
    return nextNum * nextNum;
  } else {
    // Return -1 if the input is not a perfect square
    return -1;
  }
}

// Examples
console.log(findNextSquare(121)); // Output: 144
console.log(findNextSquare(625)); // Output: 676
console.log(findNextSquare(114)); // Output: -1
