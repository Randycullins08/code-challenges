// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(str) {
  // Step 1: Match the number at the end of the string, if any
  const numberMatch = str.match(/\d+$/);

  if (numberMatch) {
    // Step 2: Extract the number part and the text part
    const numStr = numberMatch[0];
    const textPart = str.slice(0, -numStr.length);

    // Step 3: Increment the number
    const incrementedNum = String(parseInt(numStr, 10) + 1);

    // Step 4: Preserve leading zeros by padding the incremented number
    const paddedIncrementedNum = incrementedNum.padStart(numStr.length, "0");

    // Step 5: Combine the text part and the new incremented number
    return textPart + paddedIncrementedNum;
  } else {
    // If no number at the end, just add '1' to the string
    return str + "1";
  }
}

console.log(incrementString("foo")); // Expected output: "foo1"
console.log(incrementString("foobar23")); // Expected output: "foobar24"
