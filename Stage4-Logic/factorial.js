// ! This function returns the factorial of a number

let number = -6;

function fact (number) {
    let result = 1;
    if (number === 0) {
        return 1;
    } else{
        for (let i = 1; i <= number; i++) {
            result *=  i;
        }
        return result;
    }

}

console.log(`${number}! = ${fact(number)}`);