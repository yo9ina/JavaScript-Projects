
// Assignment #54

// Open the main.js file and use the let keyword.
// Successfully execute index.html in the browser.


function let_function() {
    var dog = "Rex";
    document.write(dog + " is a dog.<br>");

    {
        let dog = "Husky";
        document.write(dog + " is a dog.<br>");
    }

    document.write(dog + " is a dog.")
}