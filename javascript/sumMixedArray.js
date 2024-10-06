// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(arr) {
  return arr.reduce((sum, value) => sum + Number(value), 0);
}

// Example usage:
const mixedArray = [9, 3, "7", "3"];
console.log(sumMix(mixedArray)); // Output: 22
