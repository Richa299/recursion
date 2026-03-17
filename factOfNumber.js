let n = 4;
function factOfN(n) {
  if (n !== 0) return n * factOfN(n - 1);
  return 1;
}
console.log(factOfN(n));
