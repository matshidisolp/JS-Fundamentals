// Node.js scripts access command-line arguments via process.argv.
// process.argv[0] is 'node'
// process.argv[1] is the script file path (e.g., '0-arguments.js')

// declares and initializes 'args'
const args = process.argv.slice(2);

const numberOfArguments = args.length;

if (numberOfArguments === 0) {
  console.log("No argument");
} else if (numberOfArguments === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
