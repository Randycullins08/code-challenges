// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation

function isPangram(string) {
  // Convert the string to lowercase and remove non-alphabetic characters
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let normalizedString = string.toLowerCase().replace(/[^a-z]/g, "");

  // Iterate over the alphabet and check if each letter is in the normalized string
  for (let char of alphabet) {
    if (!normalizedString.includes(char)) {
      return false;
    }
  }
  return true;
}

// Example usage:
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello World!")); // false
