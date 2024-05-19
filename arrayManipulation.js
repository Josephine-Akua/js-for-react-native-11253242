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
