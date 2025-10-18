// ! This javascript code will get whatever input is written by user and pereform one of 3 action 
// 1- Count how many words
// 2- Count how many vowels overall
// 3- Count how many letters



// ! First declartion as consts
const textArea = document.getElementById(`textArea`);
const words = document.getElementById(`words`);
const vowels = document.getElementById(`vowels`);
const letters = document.getElementById(`letters`); 
const result = document.getElementById(`result`); 


function analyze() {
    console.log(textArea.value);

    if (textArea.value === "") {
        result.textContent = "Please, write something!"
    } else {
            if (words.checked) {
                    let counter = 0;
                    for (let i = 0; i < [...textArea.value].length; i++) {
                        if ([...textArea.value][i] === ' ') {
                            counter++;
                        }  
                    }
                    result.textContent = `This sentence contains ${counter + 1} words`;
                      
            } else if (vowels.checked) {

                
                
            } else if (letters.checked) {
                
            } else {
                result.textContent = "Please, choose what you want to analyze!"
            }
    }
}

function cancel () {
    textArea.value = "";

}