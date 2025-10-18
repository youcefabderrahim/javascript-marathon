// ! This function will return all unique characters

// ! This function will return all unique characters
let word = "Jessica";

function uniqueChar(word) {
  let counts = {}; // To store how many times each character appears

  // 1️⃣ Count each character
  for (let char of word) {
    if (counts[char]) {
      counts[char]++; // If it exists, increment
    } else {
      counts[char] = 1; // If it doesn’t exist, start from 1
    }
  }

  // 2️⃣ Collect characters that appear only once
  let unique = [];
  for (let char in counts) {
    if (counts[char] === 1) {
      unique.push(char);
    }
  }

  // 3️⃣ Return or print them
  return unique;
}

console.log(uniqueChar(word)); // ["m"]






// ! 1- the idea here is to count if the character appeared more than twice