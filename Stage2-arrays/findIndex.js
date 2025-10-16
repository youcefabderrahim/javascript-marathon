// ! This function will find you the index of an element

let fruits = ["banana", "Kiwi", "Apple", "Pineapple", "Watermekon", "figs"];
let element = "Alice";

function getIndex (array, element) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === element) {
            return i;
            break;
        }
        else {
            return "it does not exist";
        }
    }
}

console.log(`The idex of ${element} in fruits is: ${getIndex(fruits, element)}`)