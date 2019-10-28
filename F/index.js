const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: fs.createReadStream('input.txt', 'utf8'),
    terminal: false
});
let counter = new Counter([]);
rl.once('line', () => {
    rl.on('line', line => {
        counter.add(line.split(" "));
    }).on('close', () => {
        let str = '';
        for (let key in counter){
            for(let i = 0; i  < counter[key]; i++){
                if(str.length % 10 === 0){
                    fs.appendFileSync('output.txt', str);
                    str = '';
                }
                str += +key + " ";
            }
        }
        fs.appendFileSync('output.txt', str);
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log()
        console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB time: ${process.uptime() * 3600}ms`);
    });
});

function Counter(array) {
 }
  
Counter.prototype.items = function items(){
    let items = [];
    for (let key in this){
        for(let i = 0; i  < this[key]; i++){
            items.push(+key);
        }
    }
    return items;
}
Counter.prototype.add = function add(array){
    array.splice(0,1)
    array.forEach(val => this[val] = (this[val] || 0) + 1);
}  
