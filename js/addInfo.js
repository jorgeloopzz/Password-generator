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
        if (session.value == "" & password.value == "") {
            errors[2].style.display = "inline"
        } else if (password.value == "") {
            errors[1].style.display = "inline"
        } else if (session.value == "") {
            errors[0].style.display = "inline"
        }
        sessionTd.innerHTML = session.value;
        passwordTd.innerHTML = password.value;
    })

})