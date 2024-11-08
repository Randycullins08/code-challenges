// Sparse arrays in Javascript can be very useful, but just as often they can be be very annoying. One of the reasons is that sometimes basic array methods are not well suited for sparse arrays. For example, pop() method will try to return the last array element regardless of whether it exists or not. If it doesn't exist, the result is undefined. It's great if that's what you want, but what if you want to return the next existing element in a sparse array?

// Your task here is to create a new pops() array method, which would pop the last existing element in the array and remove this element and any nonexisting ones after it. For example:

// array = [1,2,3,,,,]
// array.pops() // = 3
// array // = [1,2]
// While you're at it, you could also create a new shifts() array method, which would do the same this from the other end of an array and mimic the basic shift() array method. For example:

// array = [,,,1,2,3]
// array.shifts() // = 1
// array // = [2,3]

// Extend Array prototype with pops() method
Array.prototype.pops = function () {
  // Start from the end of the array and find the first defined element
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] !== undefined) {
      const value = this[i];
      // Remove this element and any undefined elements after it
      this.splice(i, this.length - i);
      return value;
    }
  }
  // If no elements are found, return undefined
  return undefined;
};

// Extend Array prototype with shifts() method
Array.prototype.shifts = function () {
  // Start from the beginning of the array and find the first defined element
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== undefined) {
      const value = this[i];
      // Remove this element and any undefined elements before it
      this.splice(0, i + 1);
      return value;
    }
  }
  // If no elements are found, return undefined
  return undefined;
};

let array = [1, 2, 3, , , ,];
console.log(array.pops()); // Output: 3
console.log(array); // Output: [1, 2]

array = [, , , 1, 2, 3];
console.log(array.shifts()); // Output: 1
console.log(array); // Output: [2, 3]
