function duplicateEncode(word) {
    return word.toLowerCase().split("").map((el, i, w) => w.indexOf(el) == w.lastIndexOf(el) ? '(' : ')').join('');
  }
  
  console.log(duplicateEncode("Success"));