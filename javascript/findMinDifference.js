// Task
// Write a function that takes a string and finds a repeating character in the string (there may be multiple repeating characters). The function should return the minimum difference between the indices of these characters, and the character itself.

// For example, in the string "aabcba", the minimum position difference of repeated characters will be equal to 1, since for the character a, the position difference is 1.

// The output should be in the form of an array.

// If there are no duplicate characters in the string, it should return null.

// The string can only contain lowercase letters, and nothing else!!! (an empty string is not allowed).

// If the difference between repeated characters is the same, return the first minimal difference encountered.

// Examples of outputs:

// "aa" => new Object[]{1, 'a'}

// "aabbca" => new Object[]{1, 'a'}

// "abka" => new Object[]{3, 'a'}

// "abcded" => new Object[]{2, 'd'}

// "abbbbbc" => new Object[]{1, 'b'}

// "abc" => null

function findMinDifference(str) {
  const charIndices = new Map();
  let minDiff = Infinity;
  let result = null;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charIndices.has(char)) {
      const prevIndex = charIndices.get(char);
      const diff = i - prevIndex;

      if (diff < minDiff) {
        minDiff = diff;
        result = [minDiff, char];
      }
    }

    // Update the latest index of the character
    charIndices.set(char, i);
  }

  return result;
}

// Test cases
console.log(findMinDifference("aa")); // [1, 'a']
console.log(findMinDifference("aabbca")); // [1, 'a']
console.log(findMinDifference("abka")); // [3, 'a']
console.log(findMinDifference("abcded")); // [2, 'd']
console.log(findMinDifference("abbbbbc")); // [1, 'b']
console.log(findMinDifference("abc")); // null
