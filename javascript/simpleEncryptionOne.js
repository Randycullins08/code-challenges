// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  if (!text || n <= 0) return text;

  let encrypted = text;

  for (let i = 0; i < n; i++) {
    let oddChars = "";
    let evenChars = "";

    // Split the string into odd and even indexed characters
    for (let j = 0; j < encrypted.length; j++) {
      if (j % 2 === 0) {
        evenChars += encrypted[j];
      } else {
        oddChars += encrypted[j];
      }
    }

    // Concatenate odd-indexed characters with even-indexed characters
    encrypted = oddChars + evenChars;
  }

  return encrypted;
}

function decrypt(text, n) {
  if (!text || n <= 0) return text;

  let decrypted = text;

  for (let i = 0; i < n; i++) {
    let half = Math.floor(decrypted.length / 2);
    let oddChars = decrypted.slice(0, half);
    let evenChars = decrypted.slice(half);
    let original = "";

    // Reconstruct the original string by interleaving characters
    for (let j = 0; j < decrypted.length; j++) {
      original +=
        j % 2 === 0
          ? evenChars[Math.floor(j / 2)]
          : oddChars[Math.floor(j / 2)];
    }

    decrypted = original;
  }

  return decrypted;
}

// Examples
console.log(encrypt("012345", 1)); // "135024"
console.log(encrypt("012345", 2)); // "304152"
console.log(encrypt("012345", 3)); // "012345"

console.log(encrypt("01234", 1)); // "13024"
console.log(encrypt("01234", 2)); // "32104"
console.log(encrypt("01234", 3)); // "20314"

console.log(decrypt("135024", 1)); // "012345"
console.log(decrypt("304152", 2)); // "012345"
console.log(decrypt("012345", 3)); // "012345"
console.log(decrypt("13024", 1)); // "01234"
console.log(decrypt("32104", 2)); // "01234"
console.log(decrypt("20314", 3)); // "01234"
