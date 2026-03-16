let n = 3;
function SumOfN(n) {
  if (n == 0) return 0;
  return n + SumOfN(n - 1);
}
console.log(SumOfN(n));
