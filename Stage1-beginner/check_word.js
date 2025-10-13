// This will check if wether a word is longer than five characters

let word = window.prompt(`Enter the name?`);
// let word = `Alice`;

function check_word(word) {
  if (word.length >= 5) {
    console.log(`Yes. ${word} has more than 5 characters!`);
    document.getElementById(
      `title`
    ).textContent = `Yes. ${word} has more than 5 characters`;
  } else {
    console.log(`No. ${word} has less than 5 characters!`);
    document.getElementById(
      `title`
    ).textContent = `No. ${word} is less than 5 characters`;
  }
}

check_word(word);
