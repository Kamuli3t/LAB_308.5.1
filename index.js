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

function longestStr(arr) {}
