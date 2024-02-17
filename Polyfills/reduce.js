
Array.prototype.reduceMe = function (fn, initial) {
    const array = this;
    if(array.length === 0) {
        return initial;
    }

    for(let i=0; i< array.length; i++) {
        initial = fn(array[i], initial);
    }
    return initial;

}


const arr2 = [0, 1, 2, 3, 4];

const sumOfArr = arr2.reduce((accumalator, current) => {
    return current + accumalator;
}, 0);

console.log(sumOfArr);