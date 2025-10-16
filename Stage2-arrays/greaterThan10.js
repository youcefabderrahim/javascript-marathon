// ! This function will get you how many elements are greater than 10

let array = [2,-3, 99, 98, 108, 10, 7, 69, 11, -43];


function greater (array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > 10){
            counter++;
        }
    }
    return counter;

}

console.log(`There are ${greater(array)} elements greater than 10!`);