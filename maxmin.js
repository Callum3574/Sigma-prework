//test array
let array = [2, 7, 1, 100];
let newArray = [];
function compareArray(a, b) {
  //displays each comparison
  console.log(`comparing ${a} and ${b}`);
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
}

array = array.sort(compareArray);

newArray.push(array[0], array[array.length - 1]);

console.log(newArray);
