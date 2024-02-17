Function.prototype.myApply = function(context, args){
    context.myFn = this;
    context.myFn(...args);
}
function printName1(city, country){
    console.log( `${this.firstName} ${this.lastName}, ${city} - ${country}` );
}

const myName1 = {
    firstName: 'Ankit',
    lastName: 'Saxena'
};
printName1.myApply(myName1, ["Palia", "India"]);