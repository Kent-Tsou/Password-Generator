let password_1 = document.getElementById("password-1")
let password_2 = document.getElementById("password-2")
let password_3 = document.getElementById("password-3")
let password_4 = document.getElementById("password-4")
let userValue = document.getElementById("length-el")

function randomNumber() {
    return Math.floor( Math.random()* 15)
}

let arr = ["a", "B", "0", "7", "%", "#", "M", "o", "9", "w", "p", "!", "G", "3", "E"]

function generatePassword() {
    let passwordLength = userValue.value
    password_1.textContent = " ";
    password_2.textContent = " ";
    password_3.textContent = " ";
    password_4.textContent = " ";
    if (passwordLength) {
        for (let i = 0; i < passwordLength; i++) {
            password_1.textContent += arr[randomNumber()]
            password_2.textContent += arr[randomNumber()]
            password_3.textContent += arr[randomNumber()]
            password_4.textContent += arr[randomNumber()]
        }
    }
}