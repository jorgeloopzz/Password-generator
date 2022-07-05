//  File to add the information on the input
document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copyBtn"); // Add button
  // Input information
  const password = document.getElementById("pwdInput"); // Password
  // Error message
  const error = document.querySelector("h3");
  // Table
  const table = document.getElementById("table");
  let id = 0;

  //  Add the information
  copyBtn.addEventListener("click", () => {
    // Errors
    if (session.value == "" || password.value == "") {
      error.style.visibility = "visible";
    } else {
      error.style.visibility = "hidden";
      createTable();
    }
  });
});
