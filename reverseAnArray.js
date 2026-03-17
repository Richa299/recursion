let arr = [1, 2, 3, 4, 5, 6, 7];
let i = 0;
let j = arr.length - 1;
function ArrayReverse() {
  if (i !== j && i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
    ArrayReverse();
  }
}
ArrayReverse();
console.log(arr);
