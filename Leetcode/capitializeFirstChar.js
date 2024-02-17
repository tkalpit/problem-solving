function capitalizeFirst(arr, tempArr = []) {
  if (arr.length === 0) {
    return tempArr;
  } else {
    const str = arr[0]; //car
    tempArr.push(str.charAt(0).toUpperCase() + str.slice(1));
    capitalizeFirst(arr.slice(1), tempArr);
  }
  return tempArr;
}
console.log(capitalizeFirst(["car", "taco", "banana"]));
