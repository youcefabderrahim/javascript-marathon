// TODO: add this to github
// ! Reverse a string program

let word = `Alice`;

function revere(word) {
    let new_word = ``;
    for (let i = 0; i < word.length; i++) {
        new_word = new_word + word[word.length - 1 -i];
    }
    console.log(new_word);
}

revere(word);

// ! You cannot reverse and reassign indecis in a string, you have to assign one 
// charcter at a time. concatenation