// ! This function generates a random number between two number

let a = 7;
let b = 21;


function random (a, b) {
    return Math.floor(Math.random() * (b  - a) + a);
}


console.log(random(a, b));


// ! 1- The function Math.random is a built in function that generate a number between on and zero
// ! 2- By using the formula Math.random() * (max  - min) + min, we can narrow down the generated random number between two numbers max and min
// ! 3- The funcion Math.floor is used to round down the result