// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(numbers, target) {
  const indices = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (indices.has(complement)) {
      return [indices.get(complement), i];
    }

    indices.set(numbers[i], i);
  }
  return null; // If no solution is found (although there should always be one)
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([1, 3, 4, 2], 6)); // Output: [2, 3]
