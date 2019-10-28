const fs = require('fs');
const readline = require('readline');

const readInterface = readline.createInterface({
    input: fs.createReadStream('input.txt', 'utf8'),
    output: process.stdout,
    terminal: false
});

let prev = '';
let str = '';
readInterface.once('line', () => {
    readInterface.on('line', line => {
      if (line != prev) str += `${prev = line}\n`;
      if (str.length > 100) {
        fs.appendFileSync('output.txt', str);
        str = '';
      }
    }).on('close', () => fs.appendFileSync('output.txt', str));
  });
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log()
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB time: ${process.uptime() * 3600}s`);