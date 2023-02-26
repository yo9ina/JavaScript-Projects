// Assignment Submission #9

function countdown() {
    var seconds = document.getElementById("seconds").value;

    // Is working but counter is not stoping after mesage "Time's up!" if you click on it
    //    function tick() {
    //        seconds = seconds - 1;
    //        timer.innerHTML = seconds;
    //        setTimeout(tick, 1000);
    //        if (seconds == -1) {
    //            alert("Time's up!");
    //        }
    //    }
    //    tick();


    // This is working.
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            alert("Time's up!")
        }
    }
    tick();
}

