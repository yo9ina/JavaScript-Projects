// Challenge #18

// Create a new file within your JavaScript folder and name it HTML_2.html.
// Within this file, create a basic contact form.

// Create a new folder within your JavaScript folder and name it CSS.
// Within this folder, create a new file and name it CSS_1.css.
// Within this file, style your contact form.

// Research and learn how to utilize JavaScript for form validation.

// Create a new file within the JavaScript folder and name it JavaScript_2.js.
// Within this file, write the necessary code to add form validation
// to a field (or fields) of your contact form.
// Save all of your code and successfully execute it in the browser.

const nume = document.getElementById("nume")
const password = document.getElementById("password")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener("submit", (e) => {
    let messages = []
    if (nume.value === "" || nume.value == null) {
        messages.push("Name is required")
    }

    if (password.value.length < 6) {
        messages.push("Password must be longer than 6 charachters")
    }

    if (password.value.length > 20) {
        messages.push("Password must be less than 20 charachters")
    }

    if (password.value === "password") {
        messages.push("Password cannot be \"password\"")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(", ")
    }
})