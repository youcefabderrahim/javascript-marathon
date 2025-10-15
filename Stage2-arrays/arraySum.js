// ! This program returns the sum of an array elements

let array = [1,2,3,4,5,6,7,8,9,10];


function add(array) {
    let sum = 0;
    for (let i = 0; i < 10; i++){
        sum += array[i];
    }
    return sum;
}


console.log(`The sum of this array is ${add(array)}`)