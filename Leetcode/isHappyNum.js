var isHappy = function(n) {
    const alreadyExist = {};
    while(n !== 1 && !alreadyExist[n]){
        alreadyExist[n] = true;
        n = n.toString().split("").reduce((acc, curr) => {
            return acc + Math.pow(curr, 2);
        },0);
    }
    return n === 1;
};
console.log(isHappy(2))