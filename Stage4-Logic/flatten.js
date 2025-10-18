// ! This function will merge two arrays

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

function flat(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(flat(arr1, arr2));