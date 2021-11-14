// A file to generate a password
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById("generatePwd"); //Generate password button
    const pwdField = document.getElementById("pwdInput");   // Field where to put the password
    const pwdLength = 20;   //  Length of the password
    //  Characters to put in the password
    const characters = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "$", "%", "/", "(", ")", "!", "*", "ç", "ñ", "!", "ª"
    ]

    //  Function to generate the password
    function generatePassword(array) {
        for (let i = 0; i < pwdLength; i++) {
            let letter = Math.floor(Math.random() * characters.length)
            pwdField.value += array[letter]
        }
        return pwdField
    }

    //  Generate password when click
    generateBtn.addEventListener('click', () => {
        if (pwdField.value == "") {
            generatePassword(characters)
        } else {
            pwdField.value = ""
            generatePassword(characters)
        }
    })
})
