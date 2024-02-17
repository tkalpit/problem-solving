Function.prototype.myCall = function(context, ...args){
    context.myFn = this;
    context.myFn(...args);
}
function printName1(city, country){
    console.log( `${this.firstName} ${this.lastName}, ${city} - ${country}` );
}

const myName = {
    firstName: 'Ankit',
    lastName: 'Saxena'
};
printName1.myCall(myName, "Palia", "India");