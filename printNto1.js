let n = 8;
function printNum(n) {
  if (n !== 0) {
    console.log(n);
    n--;
    printNum(n);
  }
}
printNum(n);
