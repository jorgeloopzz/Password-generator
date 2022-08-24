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

  // Add uppercases
  if (checkboxes[0].checked != true) {
    checkboxes[0].addEventListener("click", () => {
      if (checkboxes[0].checked == true) {
        characters += uppercases;
      } else {
        characters = characters.replace(/[A-Z]/g, "");
      }
    });
  } else {
    checkboxes[0].addEventListener("click", () => {
      if (checkboxes[0].checked != true) {
        characters = characters.replace(/[A-Z]/g, "");
      } else {
        characters += uppercases;
      }
    });
    characters += uppercases;
  }

  // Add lowercases
  if (checkboxes[1].checked != true) {
    checkboxes[1].addEventListener("click", () => {
      if (checkboxes[1].checked == true) {
        characters += lowercases;
      } else {
        characters = characters.replace(/[a-z]/g, "");
      }
    });
  } else {
    checkboxes[1].addEventListener("click", () => {
      if (checkboxes[1].checked != true) {
        characters = characters.replace(/[a-z]/g, "");
      } else {
        characters += lowercases;
      }
    });
    characters += lowercases;
  }

  // Add numbers
  if (checkboxes[2].checked != true) {
    checkboxes[2].addEventListener("click", () => {
      if (checkboxes[2].checked == true) {
        characters += numbers;
      } else {
        characters = characters.replace(/[0-9]/g, "");
      }
    });
  } else {
    checkboxes[2].addEventListener("click", () => {
      if (checkboxes[2].checked != true) {
        characters = characters.replace(/[0-9]/g, "");
      } else {
        characters += numbers;
      }
    });
    characters += numbers;
  }

  // Add simbols
  if (checkboxes[3].checked != true) {
    checkboxes[3].addEventListener("click", () => {
      if (checkboxes[3].checked == true) {
        characters += simbols;
      } else {
        characters = characters.replace(/[^A-Za-z0-9]/g, "");
      }
    });
  } else {
    checkboxes[3].addEventListener("click", () => {
      if (checkboxes[3].checked != true) {
        characters = characters.replace(/[^A-Za-z0-9]/g, "");
      } else {
        characters += simbols;
      }
    });
    characters += simbols;
  }

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
    if (characters.length == 0) {
      // Avoid undefined output
      pwdField.value = "";
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
