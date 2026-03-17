let str = "aabbccbbaa";
let res = "";
let i = str.length - 1;
function palindrome(n) {
  if (n > 0) {
    res = str.charAt(n);
    return res + palindrome(n - 1);
  } else {
    res = str.charAt(n);
    return res;
  }
}

let palin = palindrome(i);
console.log(palin === str);
