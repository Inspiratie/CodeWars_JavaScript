// Given a string str, reverse it omitting all non-alphabetic characters.

function reverseLetter(str) {
    return str.replace(/[^a-zA-Z]/g, '').split('').reverse().join('');
}

console.log(reverseLetter('mu sk4?;!'))