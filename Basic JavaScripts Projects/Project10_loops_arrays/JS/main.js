
// Assignment #50
// Create a JS folder within the Project10_loops_arrays folder.
// Create a new file and name it main.js.
// In it, create a while loop. Save the file.

function callLoop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}