let n = 5;
let num = 1;
function printNum(num) {
  if (num !== n + 1) {
    console.log(num);
    num++;
    printNum(num);
  }
}
printNum(num);
