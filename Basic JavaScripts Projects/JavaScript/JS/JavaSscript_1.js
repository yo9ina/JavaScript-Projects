// Assignment #57
// Within the HTML_1.html and JavaScript_1.js files, utilize the document.getElementsByClassName() method. Save your code.
// Successfully execute HTML_1.html in the browser.

function hiFunc() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed.";
}

// ===============================================

// Assignment #58
// Within the HTML_1.html file, do the following:
// Use the <canvas> element
// Add a border to the canvas
// Save your code.
// Successfully execute HTML_1.html in the browser.
// ================================================

// Challenge #16
// Research how JavaScript can be utilized with the <canvas> element to create graphics.
// Within the JavaScript_1.js file utilize JavaScript to add a graphic within the canvas.
// Save your code and successfully execute it in the browser.

function canVas() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "#f00";
    ctx.fillRect(2, 2, 296, 146);
    ctx.stroke();
}

// Challenge #17
// Define and learn how to utilize the HTML canvas createLinearGradient() Method
// Create a gradient color background within a canvas.
// Save your code and successfully execute it in the browser.

function canVasGrad() {
    var c = document.getElementById("canvas_gradient");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, 300, 0);

    grd.addColorStop(0, "blue");
    grd.addColorStop(0.5, "white");
    grd.addColorStop(1, "red");

    ctx.fillStyle = grd;
    ctx.fillRect(0, 20, 300, 110);
}