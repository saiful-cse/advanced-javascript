function watch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = watch();
console.log(clock1());
console.log(clock1());

const clock2 = watch();
console.log(clock2());