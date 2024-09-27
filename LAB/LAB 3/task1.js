function square(number) {
  return number * number;
}


function sumOfCubes(num1, num2) {
  let cube1 = num1 * num1 * num1;
  let cube2 = num2 * num2 * num2;
  return cube1 + cube2;
}


function reverseNumber(num) {
  let reversedNum = 0;
  while (num != 0) {
    let digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reversedNum;
}


function printDivisibleNumbers(z) {
  for (let i = 1; i <= 100; i++) {
    if (i % z === 0) {
      console.log(i);
    }
  }
}
