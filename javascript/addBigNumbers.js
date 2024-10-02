// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

// code given:

// function add(a, b) {
//   return (Number(a) + Number(b)).toString(); // Fix me!
// }

// console.log(add("63829983432984289347293874", "90938498237058927340892374089")); //"91002328220491911630239667963"

// fixed code:

function add(a, b) {
  let carry = 0;
  let result = [];

  // Reverse both strings to make it easier to add from right to left
  let aReversed = a.split("").reverse();
  let bReversed = b.split("").reverse();

  let maxLength = Math.max(aReversed.length, bReversed.length);

  for (let i = 0; i < maxLength; i++) {
    // Convert characters to numbers, defaulting to 0 if one number is shorter
    let digitA = i < aReversed.length ? parseInt(aReversed[i], 10) : 0;
    let digitB = i < bReversed.length ? parseInt(bReversed[i], 10) : 0;

    // Sum the digits and the carry
    let sum = digitA + digitB + carry;

    // Calculate new carry (if the sum is >= 10)
    carry = Math.floor(sum / 10);

    // The current digit is the remainder when divided by 10
    result.push(sum % 10);
  }

  // If there's a leftover carry, add it to the result
  if (carry > 0) {
    result.push(carry);
  }

  // Reverse the result to get the correct order and join it into a string
  return result.reverse().join("");
}

// Test cases
console.log(add("123", "321")); // "444"
console.log(add("11", "99")); // "110"
console.log(add("63829983432984289347293874", "90938498237058927340892374089")); //"91002328220491911630239667963"
