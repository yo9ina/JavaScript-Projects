// Demo for NOT using document.write() method
function funcNot() {
    var a = document.getElementById("not").innerHTML = !(5 > 10);    // true
    var b = document.getElementById("not").innerHTML = !(5 < 10);    // false
    document.write("Negation for (5 > 10) is " + a + "<br>Negation for (5 < 10) is " + b);
}

// String and number combination
function funcStrNum() {
  //  document.write('10' + 5);
    var x = ("10" + 5) < 200;
    var y = ("10" + 5) > 200;
    document.getElementById("str_num").innerHTML= ("<p>((\"10\" + 5) < 200) = " + x + "</p><p>((\"10\" + 5) > 200) = " + y + "</p>");

}

// Function which use few operators
function funcOper() {
    var vOr =  ("3 == 3 " + (3==3)) || ("3 == 4 " + (3==4)),
        vAnd = ("3 === 4 " + (3===4)) && ("3 === 5 " + (3===5)),
        vGreat = ("3 > 2 = " + (3>2)),
        vLess = ("3 < 2 = " + (3<2)),
        vNot = ("3 < 2 = " + !(3<2));
    document.getElementById("oper").innerHTML = 
        "OR &nbsp; &nbsp;" + vOr + "<br>" + 
        "AND &nbsp; &nbsp;" + vAnd + "<br>" +
        "> &nbsp; &nbsp;" + vGreat + "<br>" +
        "< &nbsp; &nbsp;" + vLess + "<br>" +
        "! &nbsp; &nbsp;" + vNot;
}