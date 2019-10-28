const fs = require('fs');

let [str1, str2] = fs.readFileSync('input.txt').toString().split('\n');
if(str1.length === str2.length){
    str1.split('').sort().join('') == str2.split('').sort().join('') ? fs.writeFileSync('output.txt', 1) : fs.writeFileSync('output.txt', 0);
}else{
    fs.writeFileSync('output.txt', 0);
}
