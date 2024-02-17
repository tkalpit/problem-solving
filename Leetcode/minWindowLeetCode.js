var minWindowSlidingWindow = function (s, t) {
	// `right` is -1 since every loop, we start by expanding the right boundary
	// setting this to -1 ensures that we will check the first char on the first time
    let min = "", left = 0, right = 0;
    let map = {};
	
	// this creates a map for the characters we need to include in the substring
	// we store the character and its count since it can be repeated
	// for example: "BAAC"
    t.split('').forEach(element => {
        if (map[element]==null) map[element] = 1;
        else map[element] = map[element] + 1;
    });


    console.log("map", _.cloneDeep(map));
	
	// sets how many different characters we still have
	// for example: given the input "BAAC", we still have 3 different characters need to check
    let count = Object.keys(map).length; // 1

    while (right <= s.length) { // right=-1, len=13
		// found a valid substring
        if (count == 0) {
		
			// try to shift left boudary to the right, this means the very left character will be removed
			// because of this, we need to check whats the affect by removing that character, 
            let current = s[left]; // A // D //O //B
			
			// if this chacter is in our map, it means we ll need to find another one in the future
            if (map[current] != null) map[current]++; // B => 1
			
			// * we must have the condition `>0` because for case like "BBBA...", count for B could be negative
            if (map[current] > 0) count++; // 1
			
            let temp = s.substring(left, right+1)
            if (min == "") min = temp; //ADOBECODEB
            else min = min.length<temp.length?min:temp;
			console.log("min", min);
            left++; //1
        } else {
            
            let current = s[right]; // A // D //O //B //E //C //O //D //E //B //A
			
			// decrease the count for this character
            if (map[current] != null) map[current]--; // B=>1 // 0
			
            if (map[current] == 0) count--; //count = 0

            right++; // 0
        }
    }
    return min;
}
//BB: map count 2 //1
//B E C O D E B A D B

const s = "ADOBECODEBADB", t = "BB";
(minWindowSlidingWindow(s, t)); //BADB