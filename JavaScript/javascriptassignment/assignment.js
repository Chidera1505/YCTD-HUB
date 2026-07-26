// Variables //
let name = "Chidera";
let age = 20;

// Function //
function greetUser(name, age) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

// Call the function //
greetUser(name, age);

// If Statement //
let age = 18;

if (age >= 18) {
    console.log("You can vote.");
}

// Change the text inside a <p> element //
<p id="demo">Hello</p>
document.getElementById("demo").textContent = "Welcome to JavaScript!";

// Change the image (src) //
<img id="photo" src="cat.jpg"></img>
document.getElementById("photo").src = "dog.jpg";

// Remove an element //
<p id="message">Good Morning</p>
document.getElementById("message").remove();

// Click Event //
<button id="btn">Click Me</button>
document.getElementById("btn").addEventListener("click", function () {
    alert("Button clicked!");
});

// mouseover Event //
<p id="text">Move your mouse here.</p>
document.getElementById("text").addEventListener("mouseover", function () {
    alert("Your mouse is here!");
});

// Prevent Form Submission //
<form id="myForm">
    <button type="submit">Submit</button>
</form>

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Form submission stopped.");
});

