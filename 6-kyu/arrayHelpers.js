/*
    This kata is designed to test your ability to extend the functionality of 
    built-in classes. In this case, we want you to extend 
    the built-in Array class with the following methods: 
    square(), cube(), average(), sum(), even() and odd().
*/

Array.prototype.square = function () {
  return this.map((el) => Math.pow(el, 2));
};

Array.prototype.cube = function () {
  return this.map((el) => Math.pow(el, 3));
};

Array.prototype.average = function () {
  if (this.length == 0) return NaN;
  return this.reduce((total, el) => (total += el)) / this.length;
};

Array.prototype.sum = function () {
  return this.reduce((total, el) => (total += el));
};

Array.prototype.even = function () {
  return this.filter((el) => el % 2 == 0);
};

Array.prototype.odd = function () {
  return this.filter((el) => el % 2 != 0);
};

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.square()); // must return [1, 4, 9, 16, 25]
console.log(numbers.cube()); // must return [1, 8, 27, 64, 125]
console.log(numbers.average()); // must return 3
console.log(numbers.sum()); // must return 15
console.log(numbers.even()); // must return [2, 4]
console.log(numbers.odd()); // must return [1, 3, 5]
