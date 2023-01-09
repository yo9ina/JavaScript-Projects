function myFunction_2() {
    // Waiting for a number and is add to x variable
    let x = document.getElementById("yourNumber").value;

    // Initialize var "text" 
    let text = "Your number is bigger or equal with 220.";


    if (x < 220) {   // If x<10 then "text" get a new (string) value
        text = "Your number is lower then 220.";
    }

    document.getElementById("test").innerHTML = text;
}