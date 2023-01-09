function myFunction_2() {
    // Waiting for a number and is add to x variable
    let x = document.getElementById("yourNumber").value;

    if ((x < 220) || (x > 220)) {
        text = "Error: <br>Your number is not 220."; // If x is not 220 then "text" get a new (string) value;
    } else {
        text = "Correct: <br>Your number is 220."   // If x is 220 then "text" get a "Confirmation" message;
    }

    document.getElementById("test").innerHTML = text;
}