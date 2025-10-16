// ! This function returns the average of an array list

let array = [1,2,3,4,5,6,7,8,9,10];


function sum(array) {
    let average;
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum +=  array[i];
    }
    return sum;
}

function avg (number, array) {
    return number / array.length;
}

console.log(`The average of this list is ${avg(sum(array), array)}`)