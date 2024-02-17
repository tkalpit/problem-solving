/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0;
    let prevValue = 0;
    const romanObj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    for (let i = s.length - 1; i >= 0; i--) { 
        const currentValue = romanObj[s[i]];
        if (currentValue < prevValue) {
            num -= currentValue;
        } else {
            num += currentValue;
        }
        prevValue = currentValue;
    }
    return num;
};


console.log(romanToInt("IV"));