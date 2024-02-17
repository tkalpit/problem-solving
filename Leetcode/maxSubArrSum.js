function maxSubarraySum(arr, num){
	if(arr.length < num) {
  	return null;
  }
	let sum = 0;
  let maxSum = 0;
  let temp = 0;
  for(let i = 0 ; i< num; i++) {
  	maxSum += arr[i];
  }
  temp = maxSum;
  for(let i=num; i< arr.length; i++) {
  	temp = (temp - arr[i - num]) + arr[i];
    if(temp > maxSum) {
    	maxSum = temp;
    }
  }
  return maxSum;
  
}
const arr = [2,3];
const num = 3;
console.log(maxSubarraySum(arr, num));