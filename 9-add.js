// adds two numbers together
function add(a, b) {
  return a + b;
}

// get arguments from user
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// convert arguments to integers
const num1 = parseInt(arg1);
const num2 = parseInt(arg2);

// call function
console.log(add(num1, num2));
