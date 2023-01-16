var Reply;  // global variable

function Time_function() {
    var Time = new Date().getHours();  // local variable

    if (Time < 12 == Time > 0) {
        Reply = "It is morning time."
    }
    else if (Time > 11 == Time < 18) {
        Reply = "It is the afternoon."
    }
    else {
        Reply = "It is evening time."
    }

    document.getElementById("Time_of_day").innerHTML = Reply + " [" + Time + "]";
}

function errorFunc() {
    var Time = new Date().getHours();

    if (Time << 12) {  // error is here "<<"
        Reply = "Time < 12"
    }
    else {
        Reply = "Time > 12"
    }

    document.getElementById("errFunc").innerHTML = Reply; // display false result
    console.log(Reply);                                   // display false result in console
}