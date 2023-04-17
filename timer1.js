// takes in arguments from the command line
const args = process.argv.slice(2);
// loops through the arguments and beeps at set times
for (const arg of args) {
  const secs = parseInt(arg);
  if(!isNaN(time) && time > 0) {
    setTimeout(() => {
      process.stdout.write('Beep! \x07');}, secs);
  }
}

