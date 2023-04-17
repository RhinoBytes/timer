const args = process.argv.slice(2);

for (const arg of args) {
  const secs = parseInt(arg);
  if(!isNaN(time) && time > 0) {
    setTimeout(() => {
      process.stdout.write('Beep! \x07');}, secs);
  }
}

