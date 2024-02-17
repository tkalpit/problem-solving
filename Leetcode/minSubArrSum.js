//https://leetcode.com/problems/minimum-size-subarray-sum/description/
var minSubArrayLen = function (target, nums) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
      if (total < target && end < nums.length) {
          total += nums[end];
          end++;
      } else if (total >= target) {
          minLen = Math.min(minLen, end - start);
          console.log(minLen);
          total -= nums[start];
          start++;
      } else {
          break;
      }
  }
  
  return minLen === Infinity ? 0 : minLen;
};

const nums = [2,3,1,2,4,3];
const target = 7;
console.log(minSubArrayLen(target, nums));