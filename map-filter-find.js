const numbers = [1, 3, 4, 5, 6, 7, 8, 9];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * 3;
    output.push(result);
    
}
// function square(element){
//     return element * element;
// }
const result =  numbers.map(function(element) {
    return element*element;
});
console.log(output);

// const bigger = numbers.filter(x => x > 5);

// console.log(bigger);