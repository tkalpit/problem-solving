function cloneDeep(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // If obj is not an object, return it as is
  }

  // Create a new object or array to hold the cloned properties
  const cloned = Array.isArray(obj) ? [] : {};

  // Iterate over each key in obj
  for (let key in obj) {
    // Recursively clone each property and assign it to the cloned object
    cloned[key] = cloneDeep(obj[key]);
  }

  return cloned; // Return the cloned object
}

const obj1 = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4]
    }
  };
  
  const obj2 = cloneDeep(obj1);
  
  console.log(obj2); // Output: { a: 1, b: { c: 2, d: [3, 4] } }
  console.log(obj1 === obj2); // Output: false (they are separate objects)