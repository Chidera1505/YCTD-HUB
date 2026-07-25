function greet(Chidera, callback) {
  console.log("Hello " + name);

  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Chidera", sayBye);

//Delayed execution//

setTimeout(function () {
  console.log("This runs after 3 seconds");
}, 3000);

//Array loop//

const numbers = [1, 2, 3];

numbers.forEach(function(number) {
  console.log(number * 2);
});

// Promise in javaScript //

const myPromise = new Promise((resolve, reject) => {

  let success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Something went wrong!");
  }

});

myPromise
  .then((something) => {
    console.log(something);
  })
  .catch((error) => {
    console.log(error);
  });

 // APL //

 fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

  // throw Error //

  function divide(a, b) {

  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

console.log(divide(10, 0));

try {
  console.log(divide(10, 0));
} catch(error) {
  console.log(error.message);
}