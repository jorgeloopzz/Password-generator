// A file to generate a password
document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generatePwd"); //Generate password button
  const pwdField = document.getElementById("pwdInput"); // Field where to put the password
  const checkboxes = document.querySelectorAll('input[type="checkbox"]'); // Ckeckboxes
  const boxError = document.getElementById("error2"); // Error message

  //  Characters to put in the password
  let characters = "";

  // Lowercase
  const lowercases = "abcdefghijklmnopqrstuvxyz";

  // Uppercase
  const uppercases = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

  // Number
  const numbers = "123456789";

  // Simbol
  const simbols = "#~·$%&¬/()=?¿*!''";

  // Add characters in string depending on checkboxes
  const characterSets = [
    { set: uppercases, regex: /[A-Z]/g },
    { set: lowercases, regex: /[a-z]/g },
    { set: numbers, regex: /[0-9]/g },
    { set: simbols, regex: /[^A-Za-z0-9]/g },
  ];

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        characters += characterSets[index].set;
      } else {
        characters = characters.replace(characterSets[index].regex, "");
      }
    });

    if (checkbox.checked) {
      characters += characterSets[index].set;
    }
  });

  //  Function to generate the password
  function generatePassword(array) {
    for (let i = 0; i < 20; i++) {
      let character = Math.floor(Math.random() * characters.length);
      pwdField.value += array[character];
    }
    return pwdField;
  }

  // Function to display error messages
  function updateErrorVisibility() {
    const anyCheckboxChecked = Array.from(checkboxes).some(
      (checkbox) => checkbox.checked
    );
    boxError.style.display = anyCheckboxChecked ? "none" : "inline";
  }

  //  Generate password when click
  generateBtn.addEventListener("click", () => {
    if (characters.length == 0) {
      // Avoid undefined output
      pwdField.value = "";
    } else {
      pwdField.value = "";
      generatePassword(characters);
    }

    // Error message
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", updateErrorVisibility);
    });

    updateErrorVisibility();
  });
});
