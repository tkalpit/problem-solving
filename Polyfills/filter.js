
Array.prototype.filterMe = function (fn) {
    const array = this;
    const filterVal = [];
    if(array.length === 0) {
        return filterVal;
    } 
    for(let i= 0; i<array.length ; i++) {
        const isEven = fn(array[i]);
        isEven && (filterVal.push(array[i]));
    }
    return filterVal;
}





const arr1 = [2,1,4,6];

console.log(arr1.filterMe((item) => item % 2 === 0));