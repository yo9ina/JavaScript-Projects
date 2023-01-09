/* 
    1. Write out a function with an if statement that utilizes
        the new Date().getHours() method covered in the previous course step.
    2. Write out a document.getElementById() method as covered
        in the previous course step and reference the id attribute
        in the HTML file.
    3. Save the file.
*/

function myFunction() {
    var timp = new Date().getHours();
    if (timp < 18) {
        document.getElementById("test").innerHTML = "How are you today?";
    }
}