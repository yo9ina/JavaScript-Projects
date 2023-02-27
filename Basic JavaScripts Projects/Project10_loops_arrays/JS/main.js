
// Assignment #53

// Create an object through utilization of the const keyword.
// Include properties with values.
// Create a function (constant_function()) to be called from your HTML
// that will display a string using the
// document.getElementById("Constant").innerHTML method
// that includes a property value (or property values) of your object.
// Successfully execute index.html in the browser.

// Return to the main.js and take the following actions:
// Change a property’s value.
// Add a property with a value.
// Display a string that includes the added property value
// and the changed property value using document.getElementById("Constant").innerHTML method.
// Save the file.
// Successfully execute index.html in the browser.

function constant_function() {
    const dog = { gender: "male", age: 3, color: "brown" };
    dog.age = 5;
    // dog.color = "white";
    document.getElementById("Constant").innerHTML = "Rex is an " + dog.color + " " + dog.gender + ", " + dog.age + " years old.";
}