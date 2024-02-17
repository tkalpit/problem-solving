function findLongestSubstring(str) {
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let seen = {};
  while (end < str.length) {
    const char = str[end];
    if (!seen[char]) {
      seen[char] = 1;
      end++;
      maxLength = Math.max(maxLength, Object.keys(seen).length);
    } else {
      delete seen[str[start]];
      start++;
    }
  }
  console.log(seen);
  return maxLength;
}

console.log(findLongestSubstring("pwwkew"));

//abc
//bc
//bca
//ca
//cab
//ab
//abc
//bc
//c
//cb
//b
