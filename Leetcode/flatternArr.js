const arr = [1, 2, [3, [4]], 5, [6, [7, 8, [9], 10]]];
const updatedArr = [];

function flatternArr(arr, updatedArr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      flatternArr(arr[i], updatedArr);
    } else {
      updatedArr.push(arr[i]);
    }
  }
  return updatedArr;
}
console.log(flatternArr(arr, updatedArr));
