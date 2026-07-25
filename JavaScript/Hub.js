let a = 5;
let b = 10;

let temp = a; // store a
a = b;        // put b into a
b = temp;     // put original a into b

console.log(a, b);


for (let i = 1; i <= 50; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


function getGrade(score) {
  if (typeof score !== "number" || score < 0 || score > 100) {
    return "Invalid input";
  }

  if (score >= 70) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else if (score >= 45) {
    return "D";
  } else {
    return "F";
  }
}


function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

