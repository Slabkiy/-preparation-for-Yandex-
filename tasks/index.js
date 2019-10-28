
/**
 * Сжатие целочисленного массива
 * @param {number[]} arr 
 * @returns {string}
 */
 function compress(arr) {
    let range = [], output = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        range.push(arr[i]);
        if(arr[i] === arr[i + 1] - 1){
            range.push(arr[i + 1]);
        } else {
            let item = arr[i];
            if(range.length > 1) item = [range.shift(), range.pop()].join('-');
            range = [];
            output.push(item);
        }
    }
    return output.toString();
 }

/**
 * Палиндром
 * @param {string} str 
 * @returns {boolean}
 */
 function palindrom(str) {
    str = str.toLowerCase().replace(/[^a-zа-я]/g, '');
    return str == str.split('').reverse().join('');
 }
/**
 * Analog join
 * @param {string} char 
 * @param  {...any} arrgs 
 */
 function join(char, ...arrgs){
     return arrgs.join(char);
 }
/**
 * Сумма чисел массива
 * @param {any[]} array 
 */
 function arraySumm(array){
     const toInt = function toInt(item) {
        switch(typeof item){
            case 'string':
                const num = parseInt(item);
                return !Number.isNaN(num) ? num : 0;
            case 'object': 
                return Array.isArray(item) ? getSum(item) : 0;
            default: 
                return 0;
        }
     };
     const getSum = function getSum(array){
        return array.reduce((a, c) => typeof c === 'number' ? a + c : a + toInt(c), 0)
     }
     return getSum(array);
 }

 /**
  * Проверка массива на монотонность
  * @param {*} arr 
  */
 function isMonotone(arr) {
     
     return arr.every( (item, index, array) => index ? item >= array[index - 1] : true) ||
     arr.every((item, index, array) => index ? item <= array[index - 1] : true);
 }
/**
 * Get value by string
 * @param {object} object 
 * @param {string} string 
 */
function getValue(object, string){
    string.split('.').forEach((key) => {
        if(key in object){
            object = object[key];
        }else{
            object = undefined;
        }
    });
    return object;
}
/**
 * Compress string
 * @param {string} str 
 */
function strCompress(str){
    let newStr = "";
    let lastChar = str.charAt(0);
    let count = 0;
    for(let i = 0; i <= str.length; i++){
        let char = str.charAt(i);
        if(lastChar === char){
            count++;
        }else {
            newStr += lastChar + `${count > 1 ? count : ''}`;
            count = 1;
            lastChar = char;
            
        }
    }
    return newStr;
}
 module.exports = {compress, palindrom, join, arraySumm, isMonotone, getValue, strCompress};