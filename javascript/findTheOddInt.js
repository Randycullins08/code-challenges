// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(arr) {
  // Step 1: Create a frequency object
  const freq = {};

  // Step 2: Count the frequency of each number
  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  // Step 3: Find and return the number with an odd frequency
  for (const key in freq) {
    if (freq[key] % 2 !== 0) {
      return Number(key); // Return the key as a number
    }
  }
}

console.log(findOdd([7])); // Output: 7
console.log(findOdd([0])); // Output: 0
console.log(findOdd([1, 1, 2])); // Output: 2
console.log(findOdd([0, 1, 0, 1, 0])); // Output: 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // Output: 4
