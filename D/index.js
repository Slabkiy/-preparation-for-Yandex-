const fs = require('fs');
let read = fs.createReadStream('input.txt');
let str = '';
read.on('data', data => {
    
    let n = +data.toString();
    if(n < 0 || n > 11 ) return;
    let arr = Array(n).fill('(').concat(Array(n).fill(')'));
    n *= 2;
    //Печатаем нулевую последовательность
    str += `${arr.join('')}\n`;
    while(true){
        i = n - 1;
        c = 0;
        //Находим '(', которую можно заменить
        while(i >= 0){
            if (arr[i] == ')') c--;
            if (arr[i] == '(') c++;
            if (c < 0 && arr[i] == '(') break;
            i--;
        }
        //Если не нашли, то заканчиваем алгаритм
        if (i < 0) break;
        //заменяем на закрывающуюся скобочку
        arr[i] = ')';
        //заменяем на лексигрофическую последовательность
        for( let j = i + 1; j < n; j++ ){
            j <= (n - i + c)/2 + i ? arr[j] = '(' : arr[j] = ')';
        }
        str += `${arr.join('')}\n`;
        if(str.length > 100) {
            fs.appendFileSync('output.txt', str);
            str = '';
        };
    }
    
}).on('close', () => {
    fs.appendFileSync('output.txt', str);
});

