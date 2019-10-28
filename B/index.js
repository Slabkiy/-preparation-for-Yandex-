const fs = require('fs');
const readline = require('readline');

const readInterface = readline.createInterface({
    input: fs.createReadStream('input.txt', 'utf8'),
    output: process.stdout,
    console: false
});


let line = [];

readInterface.on('line', (l) => {
    line.push(l);
}).on('close', () => {
    let count = 0;
    let result = 0;
    let n = line[0];
    if(n <= 10000) {
        for(let i = 1; i <= n; i++){
        
            if(+line[i] == 1){
                count++;
                result = Math.max(count, result);
            }else {
                count = 0;
            }
            
            
        }
    }
    fs.writeFileSync('output.txt', result.toString(), 'utf8');
});
