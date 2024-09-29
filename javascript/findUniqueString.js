// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

function findUniq(arr) {
  // Helper function to normalize the strings
  const normalize = (str) =>
    [...new Set(str.replace(/\s/g, "").toLowerCase())].sort().join("");

  // Create a map to store the frequency of normalized versions of the strings
  const freqMap = arr.map(normalize);

  // Find the unique pattern by comparing the frequency map
  const unique = freqMap.find(
    (pattern) => freqMap.indexOf(pattern) === freqMap.lastIndexOf(pattern)
  );

  // Return the original string that corresponds to the unique normalized pattern
  return arr[freqMap.indexOf(unique)];
}

// Test cases
console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"])); // 'BbBb'
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])); // 'foo'
