function add() {
    let n1 = document.getElementById("number1").value;
    let num1 = Number(n1)
    let n2 = document.getElementById("number2").value;
    let num2 = Number(n2)
    document.getElementById("answer").innerHTML="Answer is:  " + (num1 + num2)
}


function subtract() {
     let n1 = document.getElementById("number1").value;
    let num1 = Number(n1)
    let n2 = document.getElementById("number2").value;
    let num2 = Number(n2)
    document.getElementById("answer").innerHTML="Answer is:  " + (num1 - num2)
}

function multiply() {
     let n1 = document.getElementById("number1").value;
    let num1 = Number(n1)
    let n2 = document.getElementById("number2").value;
    let num2 = Number(n2)
    document.getElementById("answer").innerHTML="Answer is:  " + (num1 * num2)
}

function divide() {
     let n1 = document.getElementById("number1").value;
    let num1 = Number(n1)
    let n2 = document.getElementById("number2").value;
    let num2 = Number(n2)
    document.getElementById("answer").innerHTML="Answer is:  " + (num1 / num2)
}