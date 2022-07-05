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
    // Function to remove the table
    function removeTable(id) {
      document.getElementById(id).remove();
    }

    // Function to create the table
    function createTable() {
      const tbody = table.getElementsByTagName("tbody")[0]; // Put a [0] to select the tbody element and not the object
      const row = tbody.insertRow();
      row.setAttribute("id", id++);
      row.innerHTML = `
            <td> ${session.value} </td> <td> ${password.value} </td>
            <td class='btnTd'>
                <button class="button" id="editBtn">
                    <i class="fas fa-pencil-alt"></i>
                </button>
            </td>
            `;
      // Make the remove button apart
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("button");
      removeBtn.setAttribute("id", "removeBtn");
      removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
      row.children[2].appendChild(removeBtn); // Add the button on the 3 column of the table
      removeBtn.onclick = () => {
        removeTable(row.getAttribute("id"));
      };
    }
    // Errors
    if (session.value == "" || password.value == "") {
      error.style.visibility = "visible";
    } else {
      error.style.visibility = "hidden";
      createTable();
    }
  });
});
