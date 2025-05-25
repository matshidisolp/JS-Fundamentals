const arg = process.argv[2]; // the first argument

const num = parseInt(arg);

// check if result is NaN and print
if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}
