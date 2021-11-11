//  File to add the information on the input
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById("addBtn");   // Add button
    // Inputs information
    const session = document.getElementById("sessionInput");    // Session
    const password = document.getElementById("pwdInput"); // Password
    //  Errors messages
    const sessionError = document.getElementById("sessionError");   // Session input empty
    const pwdError = document.getElementById("pwdError");   // Password imput empty
    const superError = document.getElementById("superError");   // Both inputs empty
    const sessionTd = document.getElementById("try1");
    const passwordTd = document.getElementById("try2");

    //  Add the information
    addBtn.addEventListener('click', () => {
        sessionTd.innerHTML = session.value;
        passwordTd.innerHTML = password.value;
    })

    //  Manage errors
})