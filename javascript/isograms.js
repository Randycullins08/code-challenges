// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  str = str.toLowerCase();

  // Use a Set to store unique characters
  const uniqueChars = new Set();

  // Loop through each character in the string
  for (let char of str) {
    // If the Set already contains the character, it's not an isogram
    if (uniqueChars.has(char)) {
      return false;
    }
    // Add the character to the Set
    uniqueChars.add(char);
  }

  // If no duplicates were found, return true
  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));
