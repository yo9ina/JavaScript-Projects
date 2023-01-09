var x = 5;              //global varriable

function test_1() {
    // var y = 20;         //local variable
    var z = x + y;      // Sum of local and global var
    console.log(z);     // show error without y variable:
    // "y is not defined"
}