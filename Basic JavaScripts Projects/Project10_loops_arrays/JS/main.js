
// Assignment #51

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

function forLoop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += "Instrument #" + (Y + 1) + " is: " + Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}