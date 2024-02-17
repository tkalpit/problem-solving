/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = [];
    for(let i=0; i< s.length; i++) {
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            arr.unshift(s[i]);
        } else {
            if(s[i] === ")" && arr[0] === "(") {
                arr.shift();
            } else if(s[i] === "}" && arr[0] === "{") {
                arr.shift();
            } else if(s[i] === "]" && arr[0] === "[") {
                arr.shift();
            } else {
                return false;
            }
        }
    }
    return arr.length === 0;
    
};

console.log(isValid("{")); //false
console.log(isValid("{[]}")); //true
console.log(isValid("())")); //false
console.log(isValid("(]")); //false
console.log(isValid("()")); //true
console.log(isValid("()[]{}"));  //true