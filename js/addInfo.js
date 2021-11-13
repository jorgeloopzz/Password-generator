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
        // Errors
        for (let i = 0; i < errors.length; i++) {
            errors[i].style.display = "none"  // Loop through every sentence to keep them in display none
            if (session.value == "" & password.value == "") {
                errors[2].style.display = "inline"  // Display inline for showing the sentence and the icon in horizontal
            } else if (password.value == "") {
                errors[1].style.display = "inline"
            } else if (session.value == "") {
                errors[0].style.display = "inline"
            } else {
                sessionTd.innerHTML = session.value;
                passwordTd.innerHTML = password.value;
            }
        }
    })

})