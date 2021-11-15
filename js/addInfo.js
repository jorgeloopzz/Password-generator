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
        // Table
        function createTable() {
            const tbody = table.getElementsByTagName('tbody')[0]  // Put a 0 to select the tbody element and not the object
            const row = tbody.insertRow()
            row.innerHTML = `
            <td> ${session.value} </td> <td> ${password.value} </td>
            `
            return 1
        }
        // Errors
        if ( session.value == '' || password.value == '' ) {
            error.style.display = 'inline'
        }   else {
            error.style.display = 'none'
            createTable();
        }
    })

})