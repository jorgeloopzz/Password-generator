// A file to generate a password
document.addEventListener('DOMContentLoaded', () => {
    //Characters to put in the password
    const characters = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<", ">", "$", "%", "/", "(", ")", "!", "*", "ç", "ñ", "!", "ª"
    ]
    const generateBtn = document.getElementById("generatePwd"); //Generate password button
    const copyPwd = document.getElementById("copyPwd"); // Copy password button
    const pwdField = document.getElementById("pwdField");   // Field where to put the password
    const pwdLength = 20;   //  Length of the password
    let  pwd = "";  // To add the characters generated

    //Function to generate the password
    function generatePassword(array) {
        for (let i = 0; i < pwdLength; i++) {
            let letter = Math.floor(Math.random() * characters.length)
            pwd += array[letter]
            pwdField.innerHTML = pwd
        }
        return pwdField
    }

    // Call the function when click the button
    generateBtn.addEventListener('click', () => {
        if (pwdField.style.display === "none" || pwdField.style.display === "") {
            generatePassword(characters)
            pwdField.style.display = "grid"
        } else {
            pwd = ""
            generatePassword(characters)
        }
    })
})