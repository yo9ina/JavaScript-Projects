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