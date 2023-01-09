//  Write a nested function.
//  (You will get the time)
function myFunction() {
    document.getElementById("Nested_Function").innerHTML = azi();
    function azi() {
        const z = new Date();
        let timp = z.toTimeString();
        return timp;
    }
}

// Write a function using HTML and JavaScript
// that utilizes a ternary operation using input from the browser.
function hiSpeed() {
    var Speed, driveSafe;
    Speed = document.getElementById("Speed").value;
    driveSafe = (Speed < 51) ? "You are driving safe." : "You become dangerous, or you are allready!!!";
    document.getElementById("speedResult").innerHTML = driveSafe;
}

// Write a constructor function that uses the “new” and “this” keywords.
function Pet(Type, Gender, Age, Color) {
    this.Pet_Type = Type;
    this.Pet_Gender = Gender;
    this.Pet_Age = Age;
    this.Pet_Color = Color;
}
var Coco = new Pet("parrot", "unknown sex", 2, "yellow");
var Dodo = new Pet("dog", "female", 5, "black");
var Mimi = new Pet("cat", "male", 4, "grey");

function myFunction2() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Dodo is a " + Dodo.Pet_Color + " " + Dodo.Pet_Type + ", " + Dodo.Pet_Gender + ", born " + Dodo.Pet_Age + " years ago.";
}