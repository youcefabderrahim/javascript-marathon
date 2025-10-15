// ! This program gets the largest number in an array

let array = [2,-3, 99, 98, 108, 10, 7, 69, 11, -43];


function largest_num  (array)  {
    let largest = array [0];
    for (let i = 0; i < 10; i++){
        if (array[i] > largest){
            largest = array[i];
        }
    }
    return largest;
}

console.log(`The largest number is ${largest_num(array)}`);