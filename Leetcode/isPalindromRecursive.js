function isPalindrome(str) {
	const originalStr = str;
  let reverseStr = '';
  
  function recursiveCall(param){
  	if(param.length === 0) return '';
  	return param[param.length - 1] + recursiveCall(param.slice(0,param.length - 1));
  }
  reverseStr =  recursiveCall(str);
  return originalStr === reverseStr;
}
console.log(isPalindrome('tacocat'));