
Function.prototype.bindMe = function (...args) {
    const fn = this;
    const params = args.slice(1);
    return function (...innerArgs) {
        fn.apply(args[0], [...params, ...innerArgs]);
    }
    
}



const obj = {
    firstName: "Kalpit",
    lastName: "Tandon"
}

function getName(city, state, temp){
    return this.firstName+ " " +this.lastName+ ' '+ city+ ", "+ state+ ", "+temp;
}

const printName = getName.bind(obj, "Bangalore", "Karnataka");
console.log(printName("temptt"));