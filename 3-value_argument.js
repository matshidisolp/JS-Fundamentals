const args = process.argv; // all command-line arguments

// checking for arguments
if (args.length <= 2) {
  console.log("No argument");
} else {
  // if there's an argument at index 2, it's the first one provided by the user.
  console.log(args[2]);
}
