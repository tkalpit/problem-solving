//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let start = 0;
    let end = 1;
    while(end<=nums.length) {
        
        if(nums[start] === nums[end]) {
            nums.splice(end, 1);
        } else {
            start += 1;
            end += 1;
        }
    }
    return nums;
};
const arr = [1,1,2];
console.log(removeDuplicates(arr));