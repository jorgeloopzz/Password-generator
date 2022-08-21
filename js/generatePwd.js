// A file to generate a password
document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generatePwd"); //Generate password button
  const pwdField = document.getElementById("pwdInput"); // Field where to put the password
  const checkboxes = document.querySelectorAll('input[type="checkbox"]'); // Ckeckboxes
  const boxError = document.getElementById("error2"); // Error message

  //  Characters to put in the password
  const characters = "abcdefghijklmñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTU0123456789$#~%&/()?¿"

  // Lowercase
  const lowercases = "abcdefghijklmnñopqrstuvxyz"

  // Uppercase
  const uppercases = "ABCDEFGHIJKLMNÑOPQRSTUVXYZ"

  // Number
  const numbers = "123456789"

  // Simbol
  const simbols = "#~·$%&¬/()=?¿*!''"


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
