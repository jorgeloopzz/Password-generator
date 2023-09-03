//  File to add the information on the input
document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copyBtn"); // Copy button
  // Input information
  const password = document.getElementById("pwdInput"); // Password
  // Error message
  const error = document.getElementById("error1");

  //  Copy the password
  copyBtn.addEventListener("click", () => {
    // Error
    if (password.value == "") {
      error.style.display = "inline";
    } else {
      error.style.display = "none";

      // Copy the text inside the text field
      navigator.clipboard.writeText(password.value);

      // Change button text
      copyBtn.innerHTML =
        "<span class='material-symbols-outlined'> done </span>";
      // Return button text to "Copy"
      setTimeout(() => {
        copyBtn.innerHTML =
          "<span class='material-symbols-outlined'> content_copy </span>";
      }, 2000);
    }
  });
});
