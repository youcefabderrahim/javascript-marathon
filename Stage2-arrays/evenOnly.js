// ! This functions fliters only even numbers

let array = [1,2,3,4,5,6,7,8,9,10];


function even_only(array) {
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            console.log(array[i]);
        }
    }
}


console.log(`The even numbers are ${even_only(array)}`);