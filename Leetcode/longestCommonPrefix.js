/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const firstStr = strs[0];
    let prefix = '';
    for(let i=0; i< firstStr.length; i++){
        for(let j=1; j< strs.length; j++) {
            if(i >= strs[j].length || firstStr[i] !== strs[j][i]){
                return prefix;
            }
        }
        prefix = prefix + firstStr[i];
    }
    return prefix;
};
console.log(longestCommonPrefix(["flest","flow","flight"]))