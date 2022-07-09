//  File to add the information on the input
document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copyBtn"); // Copy button
  // Input information
  const password = document.getElementById("pwdInput"); // Password
  // Error message
  const error = document.querySelector("h3");

  //  Copy the password
  copyBtn.addEventListener("click", () => {
    /* Select the text field */
    password.select();
    password.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(password.value);

    // Error
    if (password.value == "") {
      error.style.visibility = "visible";
    } else {
      error.style.visibility = "hidden";
    }
  });
});
