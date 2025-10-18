// ! This function will return how many words are in a sentence

let sentence = "One shall stand, and one shall fall!";



function words (sentence) {
    // return [...sentence];
    let counter = 0;
    for (let i = 0; i < [...sentence].length; i++) {
        if ([...sentence][i] === ' ') {
            counter++;
        }
        
    }

    return counter + 1;

        
    
}


console.log(words(sentence));



// ! 1- The idea here is to rely on how many space are there in a sentence
// ! 2- So, I used the spread operator (...) to treat the sentence like an array, loop through it and count how many spaces are there
// ! 3- for more accuracy we add 1 to the result since the first word won't have any spaces, assuming everything is written correctly
