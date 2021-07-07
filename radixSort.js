//Helper function returns the digit in num at the given place value

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

//Helper function returns the number of digits in num

function getCount(num) {
  if (num == 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(getDigit(24603, 1));
console.log(getCount(2040));
