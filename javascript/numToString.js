// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
  return num.toString();
}

console.log(typeof numberToString(1));
console.log(typeof numberToString(13));
console.log(typeof numberToString(134352));
console.log(typeof numberToString(155522));
console.log(typeof numberToString(1555));
console.log(typeof numberToString(1666));
console.log(typeof numberToString(1222));
