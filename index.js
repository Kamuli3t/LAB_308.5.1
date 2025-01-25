//! Part-1
//? which would make the most sense to you?
//* I would pick this source code for it's readablity,
//*  and used common string methods to do the job!
function reverseString2(str) {
  return str.split("").reverse().join("");
}

//* Take an array of numbers and return the sum

function arrSum(arr) {
  arr.reduce((acc, el) => {
    acc += el;
    return acc;
  }, 0);
}

//* Take an array of numbers and return the average

function arrAve(arr) {
  arr.reduce((acc, el) => {
    acc += el;
    return acc / arr.legnth;
  }, 0);
}

//* Take an array of strings and return the longest string

function longestStr(arr) {
  arr.reduce((acc, el, index) => {
    if (el.legnth > acc) {
      acc = el;
    }
    return acc;
  }, 0);
}

//* Take an array of strings, and a number and return an array
//* of the strings that are longer than the given number.

function stringLongerThan(arr, len) {
  return arr.filter((el) => el.legnth > len);
}

//* Take a number, n, and print every number between 1 and n without using loops. Use recursion.
let start = 1;
function printUntilNum(num) {
  if (start < num) {
    console.log(start);
    start++;
    printUntilNum(num);
  } else {
    console.log(num);
  }
}
