function shortestSubstringWithAllLetters(str) {
    const targetLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letterSet = new Set(targetLetters);
    const letterCount = letterSet.size;
  
    let left = 0;
    let right = 0;
    let currentLetters = new Set();
    let minLength = Infinity;
  
    while (right < str.length) {
      const currentChar = str[right];
      
      if (letterSet.has(currentChar)) {
        currentLetters.add(currentChar);
        
        // Check if all letters are covered
        if (currentLetters.size === letterCount) {
          // Update the minimum length
          while (currentLetters.size === letterCount) {
            const leftChar = str[left];
            if (letterSet.has(leftChar)) {
              currentLetters.delete(leftChar);
            }
            left++;
          }
          
          const currentLength = right - left + 2; // +2 to account for 0-based index
          minLength = Math.min(minLength, currentLength);
        }
      }
      
      right++;
    }
  
    return minLength === Infinity ? 0 : minLength;
  }
  
  // Example usage:
  const inputString = "ADOBECODEBANCZABC";
  const minLength = shortestSubstringWithAllLetters(inputString);
  console.log(minLength); // Output should be 12
  