// A file to generate a password
document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generatePwd"); //Generate password button
  const pwdField = document.getElementById("pwdInput"); // Field where to put the password
  const checkboxes = document.querySelectorAll('input[type="checkbox"]'); // Ckeckboxes
  const boxError = document.getElementById("error2"); // Error message

  //  Characters to put in the password
  const characters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "$", "%", "/", "(", ")", "!", "*", "ç", "ñ", "!", "ª"
  ];

  //  Function to generate the password
  function generatePassword(array) {
    for (let i = 0; i < 20; i++) {
      let character = Math.floor(Math.random() * characters.length);
      pwdField.value += array[character];
    }
    return pwdField;
  }

  //  Generate password when click
  generateBtn.addEventListener("click", () => {
    if (pwdField.value == "") {
      generatePassword(characters);
    } else {
      pwdField.value = "";
      generatePassword(characters);
    }

    // Error message
    if (
      checkboxes[0].checked == true ||
      checkboxes[1].checked == true ||
      checkboxes[2].checked == true ||
      checkboxes[3].checked == true
    ) {
      boxError.style.display = "none";
    } else {
      boxError.style.display = "inline";
    }
  });
});
