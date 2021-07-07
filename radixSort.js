//Helper function returns the digit in num at the given place value

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

//Helper function returns the number of digits in num

function getCount(num) {
  if (num == 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//Helper function given an array of numbers, return the number of digits in the largest nunbers in the list
function mostDigit(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getCount(nums[i]));
  }

  return maxDigits;
}

//Define a function that accepts list of numbers
//Figure out how many digits the largest numbers has
//Loop from k = 0 up to this largest number of digits
//For each iteration of the loop
//  Create buckets for each digits (0 to 9)
//  Place each number in the corresponding bucket based on its kth digit

console.log(getDigit(24603, 1));
console.log(getCount(2040));
console.log(mostDigit([23, 53323, 123, 92]));
