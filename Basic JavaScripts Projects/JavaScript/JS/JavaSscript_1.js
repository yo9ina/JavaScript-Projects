// Assignment #56

// Create a new folder on your desktop and name it JavaScript Projects.
// Within the JavaScript Projects folder, create a new file and name it html_1.html.
// Create a new folder within your JavaScript Projects folder and name it JavaScript.
// Within the JavaScript folder, create a new file and name it JavaScript_1.js.
// Within these new files, write out a switch statement as covered in the previous course step. You can customize the choices and text as you choose (animals, food, vehicles, etc.). Ensure to save the files.
//Successfully execute the switch statement in the browser.

function Color_Function() {
    var colorOutput;
    var colors = document.getElementById("Color_Input").value;
    var colorString = " is a great color!";

    switch (colors) {
        case "Red":
            colorOutput = "Red" + colorString;
            break;
        case "Yellow":
            colorOutput = "Yellow" + colorString;
            break;
        case "Green":
            colorOutput = "Green" + colorString;
            break;
        case "Blue":
            colorOutput = "Blue" + colorString;
            break;
        case "Pink":
            colorOutput = "Pink" + colorString;
            break;
        case "Purple":
            colorOutput = "Purple" + colorString;
            break;
        default: colorOutput = "Please enter a color exactly as written on the above list."
    }
    document.getElementById("Output").innerHTML = colorOutput;
}