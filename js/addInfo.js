//  File to add the information on the input
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById("addBtn");   // Add button
    // Inputs information
    const session = document.getElementById("sessionInput");    // Session
    const password = document.getElementById("pwdInput"); // Password

    //  Add the information
    addBtn.addEventListener('click', () => {
        console.log(session.value, password.value)
    })
})