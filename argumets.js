function add(a,b){
    var sum = 0;
    const allArgument = [...arguments];
    console.log(allArgument);
    for (let i = 0; i < allArgument.length; i++) {
        const element = allArgument[i];
        sum = sum + element;
    }
    return sum;
}
const result = add(2, 3, 5, 5, 10);
console.log(result);