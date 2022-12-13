function funcNot(){
    var a = document.getElementById("not").innerHTML = !(5 > 10);    // true
    var b = document.getElementById("not").innerHTML = !(5 < 10);    // false
    document.write("Negation for (5 > 10) is " + a + "<br>Negation for (5 < 10) is " + b);
}