// Your task is to write a function 
// which returns the sum of following series upto nth term(parameter).

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
function SeriesSum(n)
{
    return Array.from({length: n}, (_, i) => 1/(3*i+1)).reduce((total, el) => total + el).toFixed(2);
}

console.log(SeriesSum(0));