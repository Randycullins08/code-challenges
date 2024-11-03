// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function highScoringWord(sentence) {
  // Step 1: Split the sentence into words
  const words = sentence.split(" ");

  // Step 2: Initialize variables to track the highest scoring word and score
  let highestScore = 0;
  let highestScoringWord = "";

  // Step 3: Loop over each word to calculate its score
  for (let word of words) {
    // Calculate score by summing the positions of each letter in the alphabet
    let score = 0;

    for (let letter of word) {
      // ASCII value of 'a' is 97, so we subtract 96 to get a = 1, b = 2, etc.
      score += letter.charCodeAt(0) - 96;
    }

    // Step 4: Check if this word has the highest score so far
    if (score > highestScore) {
      highestScore = score;
      highestScoringWord = word;
    }
  }

  // Step 5: Return the word with the highest score
  return highestScoringWord;
}

// Example usage:
console.log(highScoringWord("hello abad")); // Output: "hello"
console.log(highScoringWord("man i need a taxi up to ubud")); // Output: taxi
console.log(highScoringWord("what time are we climbing up the volcano")); // Output: volcano
