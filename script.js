const message =
  "Simple Calculator. \n Enter the number matching the operations you would like to Perform?";

const operations = {
  1: "Addition",
  2: "Subtraction",
  3: "Multiplication",
  4: "Division",
};

let symbols = ["+", "-", "*", "/"];
let perform = "";
for (let action in operations) {
  perform += action + ":" + operations[action] + "\n";
}
function performanother() {
  alert(
    "click ok to reload page and perform another operation",
    location.reload()
  );
}
let tag = prompt(`${message} \n\n \n${perform}`);
console.log(typeof tag);

if (tag == 1) {
  let firstNumber = prompt(`${operations["1"]}\nEnter First Number:\n`);
  let secondNumber = prompt(
    `Enter Second Number: \n ${firstNumber} ${symbols[0]}`
  );
  let result = Number(firstNumber) + Number(secondNumber);
  alert(
    `Here's the answer of the operation\n ${firstNumber} ${symbols[0]} ${secondNumber}\n\nAnswer = ${result}`
  );
  performanother();
} else if (tag == 2) {
  let firstNumber = prompt(`${operations["2"]}\nEnter First Number:\n`);
  let secondNumber = prompt(
    `Enter Second Number: \n ${firstNumber} ${symbols[1]}`
  );
  let result = Number(firstNumber) - Number(secondNumber);
  alert(
    `Here's the answer of the operation\n${firstNumber} ${symbols[1]} ${secondNumber}\n\nAnswer = ${result}`
  );
  performanother();
} else if (tag == 3) {
  let firstNumber = prompt(`${operations["3"]}\nEnter First Number:\n`);
  let secondNumber = prompt(
    `Enter Second Number: \n ${firstNumber} ${symbols[2]}`
  );
  let result = Number(firstNumber) * Number(secondNumber);
  alert(
    `Here's the answer of the operation\n${firstNumber} ${symbols[2]} ${secondNumber}\n\nAnswer = ${result}`
  );
  performanother();
} else if (tag == 4) {
  let firstNumber = prompt(`${operations["4"]}\nEnter First Number:\n`);
  let secondNumber = prompt(
    `Enter Second Number: \n ${firstNumber} ${symbols[3]}`
  );
  let result = Number(firstNumber) / Number(secondNumber);
  alert(
    `Here's the answer of the operation\n${firstNumber} ${symbols[3]} ${secondNumber}\n\nAnswer = ${result}`
  );
  performanother();
}
