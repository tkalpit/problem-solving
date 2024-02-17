/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    const arrOfStr = s.split(" ");
    return arrOfStr[arrOfStr.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("luffy"));