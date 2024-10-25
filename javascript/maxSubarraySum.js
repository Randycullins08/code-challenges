// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(arr) {
  let maxSum = 0; // If all elements are negative or array is empty, return 0
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Test the function
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSequence([])); // Output: 0
console.log(maxSequence([-1, -2, -3])); // Output: 0
console.log(maxSequence([1, 2, 3, 4])); // Output: 10
