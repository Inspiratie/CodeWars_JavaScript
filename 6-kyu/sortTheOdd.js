/* 
    Task
    You will be given an array of numbers. You have to sort the odd numbers in 
    ascending order while leaving the even numbers at their original positions.
*/
function sortArray(array) {
  let odd = array.filter((el) => el % 2 !== 0).sort((prev, next) => prev - next);
  return array.map((el) => (el % 2 !== 0 ? odd.shift() : el));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
