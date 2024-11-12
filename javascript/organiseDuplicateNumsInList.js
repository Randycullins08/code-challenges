// Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

// Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:

// group([3, 2, 6, 2, 1, 3])
// >>> [[3, 3], [2, 2], [6], [1]]
// Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.

function group(numbers) {
  const map = new Map();

  numbers.forEach((num) => {
    if (!map.has(num)) {
      map.set(num, []); // Create a new array for each unique number
    }
    map.get(num).push(num); // Add the number to its corresponding array
  });

  return Array.from(map.values()); // Convert the map values to an array of arrays
}

// Example usage:
console.log(group([3, 2, 6, 2, 1, 3]));
// Output: [[3, 3], [2, 2], [6], [1]]
