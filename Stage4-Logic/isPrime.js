// ! This function checks if a number is prime or not
// ! Prime number is only devide by itself and 1
let number = 2;

function isPrime(number) {
    let counter = 0;
    for (let i = 1; i <= number/2; i++) {
        if (number % i == 0) {
            counter++;
        }   
    }
    // Check how many numbers number can be devided by
    if (counter == 1) {
        console.log(`Yes, ${number} is a prime number`);
    } else {
        console.log(`No, ${number} is not a prime number`);

    }
}

isPrime(number)