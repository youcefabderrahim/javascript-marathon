// ! This functions will check if a number is even or odd

let number = -10;

function evenOrOdd(number) {
    if (number < 0) {
        console.log(`${number} must be positive`);
    } else if (number % 2 == 0) {
        console.log(`${number} is an even number`);
    } else {
        console.log(`${number} is an odd number`);
    }
}

evenOrOdd(number);