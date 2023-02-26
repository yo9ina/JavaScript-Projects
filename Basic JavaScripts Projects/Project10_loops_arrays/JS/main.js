
// Assignment #52

// Open the main.js file and write an array within a function to be called.
// Utilize a function with the document.getElementById().innerHTML method
// (that references the id attribute in your HTML code) to display a value (or values) of your array.
// Save the file.
// Successfully execute index.html in the browser.

function arrayFunc() {
    var me = [];
    me[0] = "working";
    me[1] = "reading";
    me[2] = "running";
    me[3] = "playing";
    document.getElementById("Array").innerHTML = "In this picture, I am " + me[3] + ".";
}