alert("A simple javascript calculator for two operands");
let operation = prompt('Select a number to perform equivalent operation\n 1. +\n 2. *\n 3. -\n 4. /');

let num1 = +prompt("enter first number", 0);
let num2 =  +prompt("enter second second", 0);

switch(operation){
    case "1":
        alert(`${num1} - ${num2} = ${num1 + num2}`);
        break;
    case "2":
        alert(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "3":
        alert(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "4":
        alert(`${num1} / ${num2} = ${num1 / num2}`);
        break;
}

