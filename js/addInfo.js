//  File to add the information on the input
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById("addBtn");   // Add button
    // Inputs information
    const session = document.getElementById("sessionInput");    // Session
    const password = document.getElementById("pwdInput"); // Password
    const errors = document.querySelectorAll("h3"); // Errors messages
    const sessionTd = document.getElementById("try1");
    const passwordTd = document.getElementById("try2");

    //  Add the information
    addBtn.addEventListener('click', () => {
        sessionTd.innerHTML = session.value;
        passwordTd.innerHTML = password.value;
    })

})