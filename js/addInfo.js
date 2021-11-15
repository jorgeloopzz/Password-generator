//  File to add the information on the input
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('addBtn');   // Add button
    // Inputs information
    const session = document.getElementById('sessionInput');    // Session
    const password = document.getElementById('pwdInput'); // Password
    // Errors messages
    const error = document.querySelector('h3');
    // Table
    const table = document.getElementById('table');   
    
    //  Add the information
    addBtn.addEventListener('click', () => {
        // Errors
        if ( session.value == '' || password.value == '' ) {
            error.style.display = 'inline'
        } else {
            error.style.display = 'none'
        }
    })

})