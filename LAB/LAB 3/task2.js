function sumOfDigits(num) {
  let sum = 0;
  while (num != 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

function power(x, y) {
  if (y === 0) {
    return 1;
  } else if (y % 2 === 0) {
    let result = power(x, y / 2);
    return result * result;
  } else {
    let result = power(x, Math.floor(y / 2));
    return result * result * x;
  }
}


