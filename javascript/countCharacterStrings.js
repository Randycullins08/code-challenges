// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function countCharacters(str) {
  const charCount = {};

  for (let char of str) {
    // Increment the character count or set to 1 if it doesn't exist yet
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

// Examples:
console.log(countCharacters("aba")); // { a: 2, b: 1 }
console.log(countCharacters("")); // {}
