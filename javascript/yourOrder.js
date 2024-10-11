// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  return words
    .split(" ") // Split the input string into an array of words
    .sort((a, b) => {
      // Sort words based on the number within them
      const numA = a.match(/\d/); // Find the number in word 'a'
      const numB = b.match(/\d/); // Find the number in word 'b'
      return numA - numB; // Compare the numbers to sort
    })
    .join(" "); // Join the sorted words back into a string
}

console.log(order("is2 Thi1s T4est 3a"));
// Output: "Thi1s is2 3a T4est"

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
// Output: "Fo1r the2 g3ood 4of th5e pe6ople"

console.log(order(""));
// Output: ""
