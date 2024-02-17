
Array.prototype.mapMe = function (fn) {
    const array = this;
    const temp = [];
    if(array.length === 0) {
        return temp;
    }
    for(let i=0; i< array.length ; i++) {
        temp.push(fn(array[i]));
    }
    return temp;
}


const arr = [1, 2, 3];

const vals = arr.mapMe((item) => {
    return item * 2;
});

console.log("vals", vals);