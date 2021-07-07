//Helper function returns the digit in num at the given place value

function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

console.log(getDigit(24603, 1));