getName = (person) => person.name;
uppercase = (string) => string.toUpperCase();
get6Characters = (string) => string.substring(0, 6);
reverse = (string) => string.split("").reverse().join("");
const obj = {
  name: "Buckethead",
};
console.log(pipe(getName, uppercase, get6Characters, reverse)(obj));

function pipe(...fn) {
  return function (obj) {
    return fn.reduce((objData, currFunction) => {
      objData = currFunction(objData);
      return objData;
    }, obj);
  };
}




// --------------------------------------------------------------------
console.log(
  compose(reverse, get6Characters, uppercase, getName)({ name: "Buckethead" })
);

function compose(...fn) {
  return function (obj) {
    return fn.reduceRight((objData, currFunction) => {
      objData = currFunction(objData);
      return objData;
    }, obj);
  };
}
