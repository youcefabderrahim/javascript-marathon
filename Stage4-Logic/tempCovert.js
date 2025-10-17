//  ! This functio will convert C to F and vise-versa

let temp = 32;
let isCelceius = false;

function convert(temp){
    if (isCelceius) {
        // Convert to Fehrenheit
        return Number(temp) * 9/5 + 32;
    } else {
        return (Number(temp) - 32) * (5/9);
    }
}

console.log(convert(temp));