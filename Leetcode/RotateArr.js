var rotate = function (nums, k) {
  k = k % nums.length;
  const rotatedPart = nums.splice(nums.length - k);
  nums.unshift(...rotatedPart);
  return nums;
};
const arr = [1,2];
const rotationTime = 5;
console.log(rotate(arr, rotationTime));
