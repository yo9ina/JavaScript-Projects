function funcMath() {
    var tot_divide = 99 / 3;
    var divide = "99 \/ 3" + " = " + tot_divide;
    document.getElementById("divide").innerHTML = divide;
}
function funcMathSubstr() {
    var tot_substact = 100 - 20;
    var substact = "100 \- 20" + " = " + tot_substact;
    document.getElementById("sub").innerHTML = substact;
}
function funcMathAdd() {
    var tot_adding = 99 + 66;
    var adding = "99 \+ 66" + " = " + tot_adding;
    document.getElementById("add").innerHTML = adding;
}
function funcMathMultiply() {
    var tot_multiply = 100 * 20,
        multiply = "100 \* 20" + " = " + tot_multiply;
    document.getElementById("multiply").innerHTML = multiply;
}
function notHere() {
    document.getElementById("no").innerHTML = "NOT HERE!!!<br>On Label not button!!!"
    document.getElementById("no").style.color = "yellow";
    document.getElementById("no").style.background = "red";
}
function color() {
    document.getElementById("no").style.color = "red";
}
function funcMul() {
    var res = 5*10/100;
    document.getElementById("mul").innerHTML = "(5 * 10) /100 = " + res;
}
function funcModul() {
    document.getElementById("modul").innerHTML = "Modulus 25 % 6 = " + (25%6);
}
function funcNegOp() {
    var text = "Negation operator for 200 is: ";
    document.getElementById("negOp").innerHTML = text + "-200";
}
function funcInc() {
    var incText = "Click to increment one unit from 10. => "
    var incNum = 10;
    incNum++;
    document.getElementById("increment").innerHTML = incText + incNum;
}
function funcDecr() {
    var decText = "Click to decrement one unit from 10. => "
    var decNum = 10;
    decNum--;
    document.getElementById("decrement").innerHTML = decText + decNum;
}