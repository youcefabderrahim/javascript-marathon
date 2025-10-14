// ! This code will get the last character of a string
// TODO: add this to github
// TODO: just use console.log(username[username - 1])

let username = `Alice`;

function get_last(username) {
  for (let i = 0; i < username.length; i++) {
    if (i == username.length - 1) {
      console.log(username[i]);
    }
  }
}

get_last(username);
