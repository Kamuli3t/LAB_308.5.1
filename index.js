//! Part-1
//? which would make the most sense to you?
//* I would pick this source code for it's readablity,
//*  and used common string methods to do the job!
function reverseString2(str) {
  return str.split("").reverse().join("");
}

//* Take an array of numbers and return the sum

function arrSum(arr) {
  return arr.reduce((acc, el) => {
    acc += el;
    return acc;
  }, 0);
}

//* Take an array of numbers and return the average
function arrAve(arr) {
  return arr.reduce((acc, el) => (acc += el), 0) / arr.length;
}

//* Take an array of strings and return the longest string

function longestStr(arr) {
  return arr.reduce((acc, el) => {
    if (el.length > acc.length) {
      acc = el;
    }
    return acc;
  }, "");
}

//* Take an array of strings, and a number and return an array
//* of the strings that are longer than the given number.

function stringLongerThan(arr, len) {
  return arr.filter((el) => el.length > len);
}

//* Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printUntilNum(num, start = 1) {
  if (start < num) {
    console.log(start);
    printUntilNum(num, start + 1);
  } else {
    console.log(num);
  }
}

//! Part - 2 Thinking Methodically

const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

//* Sorting the array by age
const sortedByAge = data.sort((a, b) => parseInt(a.age) - parseInt(b.age));

console.log(sortedByAge);

//* Filter the array to remove entries with an age greater than 50
const youngerThan50 = data.filter((el) => el.age <= 50);

console.log(youngerThan50);

// Map the array to change the "occupation" key to "job" and increment every age by 1.
const modifiedArray = data.map((obj) => {
  obj["job"] = obj?.["occupation"];
  delete obj?.["occupation"];
  obj["age"] = (Number(obj["age"]) + 1).toString();
  return obj;
});

console.log(modifiedArray);

//Use the reduce method to calculate the sum of the ages.
// o Then use the result to calculate the average age

let sumAges = data.reduce((acc, val) => {
  acc += parseInt(val?.age);
  return acc;
}, 0);

console.log("Sum of all the ages is:", sumAges);

let aveAge = sumAges / data.length;

console.log("Average of all the ages is:", aveAge);

//! Part - 3 Thinking Critically
function incrementAge(obj) {
  if (!obj.age) {
    obj.age = 0;
    obj.update_at = new Date();
  } else {
    obj.age += 1;
  }
}

function copyAndIncrementAge(obj) {
  let copyObj = { ...obj }; // this will make a shallow copy
  if (!copyObj.age) {
    copyObj.age = 0;
    copyObj.update_at = new Date();
  } else {
    copyObj.age += 1;
  }
  return copyObj;
}

// Since we're reassinging it to another instance of Date(),
// it will have a difference refernce of a diffrent memory allocation. therefore,
// we won't affect the original object.

//! Part - 4 Thinking Prictically // No Questions

//! Part - 5 Thinking Back
//? I'm kind of lost which JavaScript Assesment is the part-5 talking about? Lab 308.4.1 ? 🤔
