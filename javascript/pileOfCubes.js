// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of
// n
// 3
// n
// 3
//  , the cube above will have volume of
// (
// n
// −
// 1
// )
// 3
// (n−1)
// 3
//   and so on until the top which will have a volume of
// 1
// 3
// 1
// 3
//  .

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as
// n
// 3
// +
// (
// n
// −
// 1
// )
// 3
// +
// (
// n
// −
// 2
// )
// 3
// +
// .
// .
// .
// +
// 1
// 3
// =
// m
// n
// 3
//  +(n−1)
// 3
//  +(n−2)
// 3
//  +...+1
// 3
//  =m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

function findNb(m) {
  let n = 0; // Start with no cubes
  let volume = 0; // Initialize the sum of volumes

  while (volume < m) {
    n++; // Increase the number of cubes
    volume += Math.pow(n, 3); // Add the volume of the current cube (n^3)
  }

  // If the total volume equals m, return n, otherwise return -1
  return volume === m ? n : -1;
}

console.log(findNb(1071225)); // Output: 45
console.log(findNb(91716553919377)); // Output: -1
