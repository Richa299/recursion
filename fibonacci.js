let n = 4;
function fib(n) {
  if (n > 1) {
    return fib(n - 1) + fib(n - 2);
  }
  if (n == 0) {
    return 0;
  } else {
    return 1;
  }
}
console.log(fib(n));
