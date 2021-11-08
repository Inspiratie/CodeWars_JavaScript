function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((el1, el2) => el1 - el2).slice(0, 2).reduce((el1, el2) => el1 + el2);
}

console.log(sumTwoSmallestNumbers([10, 4, 10]));
