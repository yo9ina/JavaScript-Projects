// This function modify and concatenate string
// on click over "Click me"
// paragraf

function myFunction() {
    var strx = "This is number ",
        stry = " plus ",
        strz = " equal ",
        dot = ".",
        x = 5,
        y = 6;

    str = strx + x + stry + y + strz + (x+y) +dot;
    document.getElementById("test").innerHTML = str;
}
