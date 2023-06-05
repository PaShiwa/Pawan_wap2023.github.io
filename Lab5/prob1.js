
function sum(array) {
    const sum = array
        .filter(e => e > 20)
        .reduce((accum, present) => accum + present, 0)
    return sum;
}

const numberArray = [1, 20, 2, 40, 50, 90, 10, 100];
const result = sum(numberArray)
console.log(result)

