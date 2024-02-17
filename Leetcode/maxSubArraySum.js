//https://leetcode.com/problems/maximum-subarray/description/
var maxSubArray = function(nums) {
    let maxEndingHere = nums[0];
    let maxSoFar = nums[0];
    for(let i=1; i<nums.length; i++) {
    	const count = maxEndingHere + nums[i]; // -1,-2,2,3,5,6,1,5
      maxEndingHere = Math.max(nums[i], count); // 1,-2,4,3,5,6,1,5
      maxSoFar = Math.max(maxEndingHere, maxSoFar); //1,1,4,4,5,6,6,6
      
      console.log(count, maxEndingHere, maxSoFar)
    }
    return maxSoFar;
};

const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));