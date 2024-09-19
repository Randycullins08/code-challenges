// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str
    .split(" ") // Split the string by spaces
    .map((word) => word.split("").reverse().join("")) // Reverse each word
    .join(" "); // Join the words back into a string with spaces
}

console.log(reverseWords("This is an example!"));
// Output: "sihT si na !elpmaxe"

console.log(reverseWords("double  spaces"));
// Output: "elbuod  secaps"
