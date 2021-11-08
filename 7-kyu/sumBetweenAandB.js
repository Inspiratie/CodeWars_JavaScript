function nbDig(n, d) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    let square = (i * i + "").split("");
    square.forEach((s) => (s == d ? count++ : null));
  }
  return count;
}

console.log(nbDig(5750, 0));


let myStr = "1, 2, 1, 2, 3"

console.log(myStr.split(1).length-1)