//https://leetcode.com/problems/remove-element/description/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let end = 0;
    while (end <= nums.length) {
        if (nums[end] === val) {
            nums.splice(end, 1);
        } else {
            end++;
        }
    }
    return nums;
    
};

const arr = [3,2,2,3];
const val = 3;
console.log(removeElement(arr, val));