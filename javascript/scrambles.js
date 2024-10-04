// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples

function scramble(str1, str2) {
  let charCount = {};

  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char] || charCount[char] === 0) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

console.log(scramble("rkqodlw", "world")); // ==> True
console.log(scramble("cedewaraaossoqqyt", "codewars")); // ==> True
console.log(scramble("katas", "steak")); // ==> False
