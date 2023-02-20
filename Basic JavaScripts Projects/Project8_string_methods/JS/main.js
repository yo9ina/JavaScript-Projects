// Assignment #44
// Create a JS folder within the Project8_string_methods folder.  
// Create a new file within the JS folder and name it main.js.
// In it, utilize the concat() method to connect two or more strings.

function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}


// Assignment #45
// Working within the Project8_string_methods folder:
// Within your main.js file, write a slice() method that displays a section of a string.

function slice_Method() {
    var Sentence = "My name is Lucian and I will show you this on the screen.";
    var Section = Sentence.slice(11, 17);
    document.getElementById("Slice").innerHTML = Section;
}


// Assignment #46
// Working within the Project8_string_methods folder:
// Within your main.js file, use the toString() method to return a number as a string.

function stringMethod() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}


// Assignment #47
// Working within the Project8_string_methods folder:
// Within your main.js file, utilize the toPrecision() method to return
// a string as a number of a specified length.

function precisionMethod() {
    var Y = 12345.67890123456789;
    document.getElementById("Precision").innerHTML = Y.toPrecision(8);
}