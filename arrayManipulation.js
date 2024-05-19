const processArray = (numbers) => {
   return numbers.map(num => {
    if (num % 2 === 0) {
        return num*num;
    } else {
        return num * 3;
    }
 });
}

export const numbers = processArray([2,3,4,5,6]);
console.log(numbers);

const formatArrayStrings = (strings, numbers) => {
    return strings.map ((str,index) =>{
        if (numbers[index] %2 === 0 ) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

export const words = ["come","go","run","word","jump"];
export const strings = formatArrayStrings(words, numbers);
console.log(strings);