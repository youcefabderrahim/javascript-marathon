// ! This function merges two arrays
// TODO: there is a slight problem that I need to fix. because it overrides the last element of the 1st array

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

function merge(array1, array2) {
  let merged = [];

  // ! Add 1st array to merged
  for (let i = 0; i < array1.length; i++) {
    merged[i] = array1[i];
  }

  // ! Add 2nd array to merged
  for (let i = 0; i < array2.length; i++) {
    merged[array1.length -1 + i] = array2[i];
  }
  return merged;

}

console.log(merge(array1, array2));
